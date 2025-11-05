# Configurar Supabase en Producción

Guía rápida para configurar las variables de entorno de Supabase en tu servidor de producción.

## 🚀 Pasos Rápidos

### 1. Conectarte al servidor VPS

```bash
ssh usuario@tu-vps-ip
```

### 2. Navegar al directorio de la aplicación

```bash
cd /var/www/sepe-app  # o donde tengas tu aplicación
```

### 3. Crear/editar el archivo .env.local

```bash
nano .env.local
```

### 4. Añadir las siguientes variables

```env
# Variables de entorno para Supabase
NEXT_PUBLIC_SUPABASE_URL=https://qpczejqwgahxgwzclodw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFwY3PlanF3Z2FoeGd3emNsb2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzNTcyMzMsImV4cCI6MjA3NzkzMzIzM30.iGU8D2bu30uuEdYG-_VOM45B5hSz6fpfPjO9QhkCT60

# Google Analytics / Tag Manager
NEXT_PUBLIC_GA_ID=G-BKCNGX9D46
```

### 5. Guardar el archivo

- Presiona `Ctrl+O` para guardar
- Presiona `Enter` para confirmar
- Presiona `Ctrl+X` para salir

### 6. Reiniciar la aplicación con PM2

```bash
pm2 restart sepe-app
```

### 7. Verificar que funciona

```bash
# Ver los logs para comprobar que no hay errores
pm2 logs sepe-app --lines 50

# Verificar que las variables están cargadas
pm2 env sepe-app
```

## ✅ Verificación

1. Visita tu sitio web: `https://webcursosepe.es`
2. Visita cualquier blog: `https://webcursosepe.es/blog/baja-maternidad`
3. Ve a Supabase → **Table Editor** → `blog_views`
4. Deberías ver una nueva entrada con la visualización

## 🔍 Troubleshooting

### Las variables no se cargan

```bash
# Verificar que el archivo existe
ls -la .env.local

# Verificar el contenido (sin mostrar las claves completas)
cat .env.local | grep -v "ANON_KEY"

# Reiniciar PM2 completamente
pm2 delete sepe-app
pm2 start ecosystem.config.js
pm2 save
```

### Error: "Supabase credentials not found"

1. Verifica que el archivo `.env.local` existe en el directorio de la aplicación
2. Verifica que las variables tienen el prefijo `NEXT_PUBLIC_`
3. Reinicia PM2 después de cambiar las variables
4. Verifica los logs: `pm2 logs sepe-app --err`

### No se registran visualizaciones

1. Verifica que la tabla `blog_views` existe en Supabase
2. Verifica que las políticas RLS están activas
3. Abre la consola del navegador (F12) y revisa si hay errores
4. Verifica que la API `/api/track-view` responde correctamente

## 📝 Notas Importantes

- El archivo `.env.local` NO debe subirse a Git (está en `.gitignore`)
- Las variables con prefijo `NEXT_PUBLIC_` son accesibles en el cliente
- Después de cambiar variables de entorno, SIEMPRE reinicia PM2
- Para producción, usa las mismas credenciales que en local

