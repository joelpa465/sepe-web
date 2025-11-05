# Configuración de Supabase para Tracking de Blogs

Esta guía te ayudará a configurar Supabase para rastrear las visualizaciones de blogs y mostrar los más populares en el homepage.

## Paso 1: Crear Proyecto en Supabase

1. Ve a [https://supabase.com](https://supabase.com) y crea una cuenta (si no tienes una)
2. Haz clic en "New Project"
3. Completa los datos del proyecto:
   - **Name**: `sepe-blog-tracking` (o el nombre que prefieras)
   - **Database Password**: Elige una contraseña segura (guárdala)
   - **Region**: Elige la región más cercana (ej: `West US`)
   - **Pricing Plan**: Free tier es suficiente para empezar

## Paso 2: Crear la Tabla

1. Una vez creado el proyecto, ve a **SQL Editor** en el menú lateral
2. Haz clic en **New Query**
3. Copia y pega el contenido del archivo `supabase-setup.sql`
4. Haz clic en **Run** (o presiona `Ctrl/Cmd + Enter`)
5. Verifica que la tabla se haya creado correctamente

## Paso 3: Obtener las Credenciales

1. Ve a **Settings** → **API** en el menú lateral
2. Encontrarás:
   - **Project URL**: Copia este valor (ej: `https://xxxxx.supabase.co`)
   - **anon/public key**: Copia este valor (es la clave pública)

## Paso 4: Configurar Variables de Entorno

1. Crea o edita el archivo `.env.local` en la raíz del proyecto
2. Añade las siguientes variables:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-clave-publica-aqui
```

3. Reemplaza los valores con los que obtuviste en el paso anterior
4. **¡IMPORTANTE!** No subas el archivo `.env.local` a Git (ya está en `.gitignore`)

## Paso 5: Verificar que Funciona

1. Reinicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

2. Visita cualquier blog (ej: `/blog/baja-maternidad`)
3. Ve a Supabase → **Table Editor** → `blog_views`
4. Deberías ver una nueva entrada con la visualización

## Verificación de la Configuración

Para verificar que todo está configurado correctamente:

1. **Verificar tabla**: Ve a **Table Editor** y confirma que existe la tabla `blog_views`
2. **Verificar políticas**: Ve a **Authentication** → **Policies** y confirma que las políticas están activas
3. **Probar API**: Visita `/api/most-viewed` en tu navegador (debería devolver un JSON vacío si no hay visualizaciones)

## Estructura de la Base de Datos

La tabla `blog_views` tiene la siguiente estructura:

- `id`: ID único (auto-incremental)
- `blog_id`: ID del blog/tutorial (ej: "baja-maternidad")
- `blog_type`: Tipo ("blog" o "tutorial")
- `viewed_at`: Fecha y hora de la visualización
- `ip_address`: IP del visitante (opcional)
- `user_agent`: User agent del navegador (opcional)
- `created_at`: Fecha de creación del registro

## Cómo Funciona

1. **Tracking**: Cada vez que alguien visita un blog, se registra una visualización en la base de datos
2. **Ordenamiento**: El homepage consulta las visualizaciones y ordena los blogs de más vistos a menos vistos
3. **Mostrar top**: Solo se muestran los 8 blogs más vistos en el homepage

## Troubleshooting

### Error: "Supabase credentials not found"
- Verifica que las variables de entorno estén correctamente configuradas en `.env.local`
- Reinicia el servidor de desarrollo después de cambiar las variables

### Error: "Failed to track view"
- Verifica que las políticas RLS estén correctamente configuradas
- Verifica que la tabla `blog_views` exista en Supabase

### No aparecen visualizaciones
- Verifica que el componente `BlogViewTracker` esté siendo renderizado en las páginas de blog
- Verifica la consola del navegador para ver si hay errores
- Verifica que la API `/api/track-view` esté funcionando correctamente

## Producción

Para producción, asegúrate de:

1. Configurar las mismas variables de entorno en tu VPS/servidor
2. Si usas PM2, reiniciar el proceso después de cambiar las variables:
   ```bash
   pm2 restart sepe-app
   ```

## Seguridad

- Las políticas RLS permiten que cualquiera pueda insertar y leer visualizaciones
- Esto es seguro porque solo estamos almacenando información de visualizaciones (no datos sensibles)
- Si necesitas más seguridad, puedes ajustar las políticas en Supabase

