# Instrucciones para subir a GitHub

## ✅ Ya completado
- ✅ Repositorio git inicializado
- ✅ Todos los archivos agregados
- ✅ Commit realizado

## 📝 Próximos pasos

### 1. Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre: `sepe-web` (o el que prefieras)
3. Descripción: "Sitio web completo sobre cursos SEPE"
4. Elige Private o Public
5. **NO marques** "Initialize with README"
6. Clic en "Create repository"

### 2. Conectar y subir

Después de crear el repo, ejecuta estos comandos (reemplaza `TU-USUARIO` y `NOMBRE-REPO`):

```bash
# Conectar con GitHub (HTTP)
git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git

# Asegurar que estás en la rama main
git branch -M main

# Subir el código
git push -u origin main
```

### 3. Si GitHub te pide autenticación

#### Opción A: Personal Access Token
1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Selecciona scope: `repo`
4. Copia el token
5. Úsalo como contraseña cuando git te lo pida

#### Opción B: SSH (Recomendado para el futuro)
```bash
# Generar clave SSH (si no tienes)
ssh-keygen -t ed25519 -C "tu-email@example.com"

# Copiar la clave pública
cat ~/.ssh/id_ed25519.pub

# Agregar en GitHub: Settings → SSH and GPG keys → New SSH key
# Luego usar SSH URL:
git remote set-url origin git@github.com:TU-USUARIO/NOMBRE-REPO.git
```

## 🔄 Para futuras actualizaciones

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

## ✅ Verificar

Después del push, ve a tu repositorio en GitHub y verifica que todos los archivos estén ahí.
