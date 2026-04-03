-- Crear tabla de reservas en Supabase
-- Ejecuta este SQL en el editor SQL de tu proyecto Supabase

CREATE TABLE IF NOT EXISTS reservas (
  id BIGSERIAL PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefono VARCHAR(20) NOT NULL,
  edad INTEGER NOT NULL,
  arte_marcial VARCHAR(50) NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  estado VARCHAR(20) DEFAULT 'pendiente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear índices para búsquedas rápidas
CREATE INDEX idx_reservas_email ON reservas(email);
CREATE INDEX idx_reservas_fecha ON reservas(fecha);
CREATE INDEX idx_reservas_estado ON reservas(estado);

-- Activar Row Level Security (RLS)
ALTER TABLE reservas ENABLE ROW LEVEL SECURITY;

-- Política para insertar (cualquiera puede crear una reserva)
CREATE POLICY "Permitir inserción de reservas"
ON reservas FOR INSERT
WITH CHECK (true);

-- Política para seleccionar (solo lectura pública)
CREATE POLICY "Permitir lectura de reservas"
ON reservas FOR SELECT
USING (true);

-- Política para actualizar estado (solo admin)
CREATE POLICY "Permitir actualización de estado"
ON reservas FOR UPDATE
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');
