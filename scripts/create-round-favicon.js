const fs = require('fs');
const path = require('path');

// Este script crea una versión redonda del favicon usando Canvas API de Node.js
// Si no tienes canvas instalado, usaremos una alternativa

async function createRoundFavicon() {
  try {
    // Intentar usar sharp si está disponible (más común en proyectos Next.js)
    let sharp;
    try {
      sharp = require('sharp');
    } catch (e) {
      console.log('Sharp no está instalado. Instalando...');
      // No podemos instalar automáticamente, así que usaremos una solución alternativa
      console.log('Por favor, instala sharp: npm install sharp');
      return;
    }

    const inputPath = path.join(__dirname, '../public/images/logo/favicon.png');
    const outputPath = path.join(__dirname, '../public/images/logo/favicon-round.png');
    
    // Leer la imagen
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    const size = Math.min(metadata.width, metadata.height);
    
    // Crear una máscara circular
    const roundedCorners = Buffer.from(
      `<svg><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="black"/></svg>`
    );
    
    // Aplicar la máscara circular y redimensionar a cuadrado si es necesario
    await image
      .resize(size, size, {
        fit: 'cover',
        position: 'center'
      })
      .composite([
        {
          input: roundedCorners,
          blend: 'dest-in'
        }
      ])
      .png()
      .toFile(outputPath);
    
    console.log('✅ Favicon redondo creado en:', outputPath);
    
    // También crear una versión para el favicon.ico
    await sharp(outputPath)
      .resize(32, 32)
      .toFile(path.join(__dirname, '../public/favicon-round.ico'));
    
    console.log('✅ Favicon.ico redondo creado');
    
  } catch (error) {
    console.error('Error creando favicon redondo:', error);
    console.log('\nAlternativa: Usa una herramienta online para redondear la imagen');
  }
}

createRoundFavicon();

