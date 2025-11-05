-- Crear tabla para tracking de visualizaciones de blogs
CREATE TABLE IF NOT EXISTS blog_views (
  id BIGSERIAL PRIMARY KEY,
  blog_id VARCHAR(255) NOT NULL,
  blog_type VARCHAR(20) NOT NULL CHECK (blog_type IN ('blog', 'tutorial')),
  viewed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para mejorar el rendimiento de las consultas
CREATE INDEX IF NOT EXISTS idx_blog_views_blog_id ON blog_views(blog_id);
CREATE INDEX IF NOT EXISTS idx_blog_views_blog_type ON blog_views(blog_type);
CREATE INDEX IF NOT EXISTS idx_blog_views_viewed_at ON blog_views(viewed_at DESC);
CREATE INDEX IF NOT EXISTS idx_blog_views_blog_id_type ON blog_views(blog_id, blog_type);

-- Habilitar Row Level Security (RLS)
ALTER TABLE blog_views ENABLE ROW LEVEL SECURITY;

-- Política para permitir que cualquiera pueda insertar visualizaciones
CREATE POLICY "Allow public insert on blog_views"
  ON blog_views
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Política para permitir que cualquiera pueda leer las visualizaciones (para estadísticas)
CREATE POLICY "Allow public read on blog_views"
  ON blog_views
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Comentarios en la tabla
COMMENT ON TABLE blog_views IS 'Tabla para almacenar las visualizaciones de blogs y tutoriales';
COMMENT ON COLUMN blog_views.blog_id IS 'ID del blog o tutorial (ej: "baja-maternidad", "cita-previa-inem")';
COMMENT ON COLUMN blog_views.blog_type IS 'Tipo de contenido: "blog" o "tutorial"';
COMMENT ON COLUMN blog_views.viewed_at IS 'Fecha y hora de la visualización';
COMMENT ON COLUMN blog_views.ip_address IS 'Dirección IP del visitante (opcional)';
COMMENT ON COLUMN blog_views.user_agent IS 'User agent del navegador (opcional)';

