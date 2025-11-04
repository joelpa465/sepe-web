# Actualizar Node.js en el VPS

## Problema
Next.js 16 requiere Node.js >= 20.9.0, pero tienes Node.js 18.19.1.

## Solución: Actualizar a Node.js 20

### Opción 1: Usando NodeSource (Recomendado)

```bash
# 1. Limpiar instalación anterior de Node.js
sudo apt remove nodejs npm -y
sudo apt autoremove -y

# 2. Instalar Node.js 20.x desde NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 3. Verificar la versión
node --version  # Debería mostrar v20.x.x o superior
npm --version
```

### Opción 2: Usando NVM (Node Version Manager)

```bash
# 1. Instalar NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# 2. Recargar el perfil
source ~/.bashrc

# 3. Instalar Node.js 20
nvm install 20
nvm use 20
nvm alias default 20

# 4. Verificar
node --version
npm --version
```

### Opción 3: Si la opción 1 no funciona

```bash
# Desinstalar completamente Node.js
sudo apt remove nodejs npm -y
sudo apt purge nodejs npm -y
sudo apt autoremove -y

# Eliminar cualquier resto
sudo rm -rf /usr/local/bin/node
sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/lib/node_modules

# Instalar Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Verificar
node --version
npm --version
```

## Después de actualizar

```bash
# Verificar que estás en el directorio correcto
cd /var/www/sepe-web

# Limpiar cache de npm (opcional pero recomendado)
npm cache clean --force

# Instalar dependencias
npm ci

# Construir la aplicación
npm run build
```

## Si sigues teniendo problemas

```bash
# Ver qué versión de Node.js está activa
which node
node --version

# Ver todas las versiones instaladas (si usaste NVM)
nvm list

# Verificar PATH
echo $PATH
```
