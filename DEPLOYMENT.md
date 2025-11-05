# Guía de Deployment en VPS

Esta guía te ayudará a desplegar tu aplicación Next.js en un servidor VPS.

## 📋 Prerequisitos

- Servidor VPS con Ubuntu 20.04 o superior (o similar)
- Acceso SSH al servidor
- Dominio configurado apuntando al IP del VPS (opcional pero recomendado)
- Node.js 18+ instalado en el VPS

## 🚀 Paso 1: Preparar el proyecto localmente

### 1.1 Configurar variables de entorno

```bash
# Copia el archivo de ejemplo
cp .env.example .env.local

# Edita .env.local con tus valores reales
nano .env.local
```

Variables importantes:
- `NEXT_PUBLIC_GA_ID`: Tu ID de Google Analytics o Google Tag Manager

### 1.2 Construir el proyecto

```bash
# Instalar dependencias
npm ci

# Construir para producción
npm run build
```

Esto generará el directorio `.next` con la aplicación compilada.

## 📤 Paso 2: Transferir archivos al VPS

### Opción A: Usando SCP

```bash
# Desde tu máquina local, en el directorio del proyecto
scp -r \
  .next \
  public \
  package.json \
  package-lock.json \
  next.config.ts \
  tsconfig.json \
  .env.local \
  node_modules/.package-lock.json \
  usuario@tu-vps-ip:/ruta/donde/quieres/la/app
```

### Opción B: Usando Git (Recomendado)

```bash
# En el VPS
cd /var/www  # o donde quieras tu aplicación
git clone tu-repositorio.git sepe-app
cd sepe-app

# Instalar dependencias
npm ci

# Construir
npm run build
```

**⚠️ Importante:** Asegúrate de tener un `.gitignore` que excluya `.env.local` y `.next`, pero incluye `.env.example`.

## 🖥️ Paso 3: Configurar el VPS

### 3.1 Instalar Node.js (si no está instalado)

```bash
# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar instalación
node --version
npm --version
```

### 3.2 Instalar PM2 (gestor de procesos)

```bash
sudo npm install -g pm2
```

### 3.3 Configurar variables de entorno en el VPS

**Método 1: Crear archivo .env.local en el servidor (Recomendado)**

```bash
# En el directorio de tu aplicación en el VPS
cd /var/www/sepe-app  # o donde tengas tu aplicación

# Crear el archivo .env.local
nano .env.local
```

Añade las siguientes variables (reemplaza con tus valores reales):

```env
# Variables de entorno para Supabase
NEXT_PUBLIC_SUPABASE_URL=https://qpczejqwgahxgwzclodw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-publica-de-supabase

# Google Analytics / Tag Manager
NEXT_PUBLIC_GA_ID=G-BKCNGX9D46
```

Guarda el archivo (`Ctrl+O`, `Enter`, `Ctrl+X`).

**Método 2: Añadir variables directamente en PM2 (Alternativa)**

Si prefieres no usar `.env.local`, puedes añadir las variables directamente en `ecosystem.config.js`:

```javascript
env: {
  NODE_ENV: 'production',
  PORT: 3000,
  NEXT_PUBLIC_SUPABASE_URL: 'https://qpczejqwgahxgwzclodw.supabase.co',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: 'tu-clave-publica-de-supabase',
  NEXT_PUBLIC_GA_ID: 'G-BKCNGX9D46'
}
```

**⚠️ Importante:** Después de configurar las variables de entorno:
1. Reinicia PM2: `pm2 restart sepe-app`
2. Verifica que las variables estén cargadas: `pm2 env sepe-app`

## 🔧 Paso 4: Configurar PM2

### 4.1 Crear archivo de configuración PM2

Crea un archivo `ecosystem.config.js` en la raíz del proyecto:

```javascript
module.exports = {
  apps: [{
    name: 'sepe-app',
    script: 'node_modules/next/dist/bin/next',
    args: 'start',
    cwd: '/var/www/sepe-app', // Cambia esta ruta
    instances: 1,
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/pm2/sepe-app-error.log',
    out_file: '/var/log/pm2/sepe-app-out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    merge_logs: true,
    autorestart: true,
    max_memory_restart: '1G'
  }]
};
```

### 4.2 Iniciar la aplicación con PM2

```bash
# Iniciar
pm2 start ecosystem.config.js

# Guardar configuración para que se inicie al reiniciar el servidor
pm2 save
pm2 startup
```

### 4.3 Comandos útiles de PM2

```bash
pm2 status          # Ver estado
pm2 logs sepe-app   # Ver logs
pm2 restart sepe-app # Reiniciar
pm2 stop sepe-app   # Detener
pm2 delete sepe-app # Eliminar
```

## 🌐 Paso 5: Configurar Nginx como Reverse Proxy

### 5.1 Instalar Nginx

```bash
sudo apt install nginx -y
```

### 5.2 Crear configuración de Nginx

```bash
sudo nano /etc/nginx/sites-available/sepe-app
```

Contenido del archivo:

```nginx
server {
    listen 80;
    server_name tudominio.com www.tudominio.com; # Cambia por tu dominio

    # Redirect HTTP to HTTPS (después de configurar SSL)
    # return 301 https://$server_name$request_uri;

    # Si aún no tienes SSL, usa esta configuración:
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Optimización para assets estáticos
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, max-age=3600, immutable";
    }
}
```

### 5.3 Habilitar el sitio

```bash
# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/sepe-app /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Recargar Nginx
sudo systemctl reload nginx
```

## 🔒 Paso 6: Configurar SSL con Let's Encrypt (Recomendado)

### 6.1 Instalar Certbot

```bash
sudo apt install certbot python3-certbot-nginx -y
```

### 6.2 Obtener certificado SSL

```bash
sudo certbot --nginx -d tudominio.com -d www.tudominio.com
```

Sigue las instrucciones. Certbot actualizará automáticamente la configuración de Nginx.

### 6.3 Renovación automática

Certbot configura la renovación automática, pero puedes verificarlo:

```bash
sudo certbot renew --dry-run
```

## 🔄 Paso 7: Proceso de actualización

Para actualizar la aplicación en el futuro:

```bash
# En el VPS, en el directorio de la app
git pull origin main  # O la rama que uses
npm ci
npm run build
pm2 restart sepe-app
```

O si no usas Git:

```bash
# Desde tu máquina local, construir y transferir
npm run build
scp -r .next usuario@vps:/ruta/a/la/app/

# En el VPS
pm2 restart sepe-app
```

## 📊 Paso 8: Monitoreo y logs

```bash
# Ver logs en tiempo real
pm2 logs sepe-app

# Ver uso de recursos
pm2 monit

# Ver información del proceso
pm2 info sepe-app
```

## 🐛 Solución de problemas

### La aplicación no inicia

1. Verifica los logs: `pm2 logs sepe-app`
2. Verifica que el puerto 3000 esté libre: `sudo netstat -tlnp | grep 3000`
3. Verifica las variables de entorno: `pm2 env sepe-app`

### Nginx muestra 502 Bad Gateway

1. Verifica que PM2 esté ejecutando la app: `pm2 status`
2. Verifica que la app escuche en localhost:3000: `curl http://localhost:3000`
3. Verifica los logs de Nginx: `sudo tail -f /var/log/nginx/error.log`

### Errores de permisos

```bash
# Asegúrate de que el usuario tenga permisos
sudo chown -R $USER:$USER /var/www/sepe-app
```

## ✅ Checklist final

- [ ] Node.js 18+ instalado
- [ ] PM2 instalado y configurado
- [ ] Aplicación construida y funcionando
- [ ] Variables de entorno configuradas
- [ ] Nginx configurado como reverse proxy
- [ ] SSL/HTTPS configurado (Let's Encrypt)
- [ ] Dominio apuntando al VPS
- [ ] Firewall configurado (puertos 80, 443 abiertos)
- [ ] PM2 configurado para iniciar al arrancar el servidor

## 🔥 Configurar Firewall (UFW)

```bash
# Permitir SSH (importante hacerlo primero)
sudo ufw allow 22/tcp

# Permitir HTTP y HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Activar firewall
sudo ufw enable

# Verificar estado
sudo ufw status
```

## 📝 Notas adicionales

- El modo `standalone` en `next.config.ts` optimiza el build para servidores
- Considera usar un CDN para assets estáticos en producción
- Configura backups regulares de tu base de datos si usas una
- Monitorea el uso de recursos del servidor regularmente

¡Listo! Tu aplicación debería estar funcionando en producción. 🎉
