#!/bin/bash

# Script de deployment para VPS
# Uso: ./deploy.sh

set -e

echo "🚀 Iniciando deployment..."

# Colores para output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Verificar que estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ Error: No se encuentra package.json. Asegúrate de estar en el directorio del proyecto.${NC}"
    exit 1
fi

# Verificar que existe .env.local
if [ ! -f ".env.local" ]; then
    echo -e "${YELLOW}⚠️  Advertencia: No se encuentra .env.local${NC}"
    echo "Creando desde .env.example..."
    if [ -f ".env.example" ]; then
        cp .env.example .env.local
        echo -e "${YELLOW}Por favor, edita .env.local con tus valores reales antes de continuar.${NC}"
    fi
fi

echo -e "${GREEN}📦 Instalando dependencias...${NC}"
npm ci

echo -e "${GREEN}🔨 Construyendo aplicación para producción...${NC}"
npm run build

echo -e "${GREEN}✅ Build completado exitosamente!${NC}"
echo ""
echo -e "${YELLOW}📝 Próximos pasos en el VPS:${NC}"
echo "1. Copia los archivos al servidor (excepto node_modules y .next)"
echo "2. En el VPS, ejecuta: npm ci --production"
echo "3. Copia el directorio .next generado"
echo "4. Configura PM2 o tu gestor de procesos"
echo "5. Configura Nginx como reverse proxy"
echo ""
echo -e "${GREEN}✨ ¡Listo para deployment!${NC}"
