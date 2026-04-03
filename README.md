# Freddy Villena - ICE BOY | Sitio Web Profesional de MMA

Web one-page profesional para Freddy Villena, luchador amateur de MMA apodado "ICE BOY", con entrenador y tienda oficial.

## 🚀 Características

- **Diseño Oscuro y Premium**: Colores negro, blanco y azul hielo (#00d4ff)
- **Responsive Mobile-First**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Con Framer Motion
- **Base de Datos Supabase**: Gestión de reservas
- **Tienda Oficial**: Camiseta FREDDY ICE BOY
- **Sistema de Reservas**: Integrado con base de datos
- **Scroll Suave**: Navegación fluida
- **Navbar Fija**: Con efecto backdrop blur
- **Secciones principales**:
  1. **HERO** - Presentación con CTA
  2. **ENTRENADOR** - Servicios de clases
  3. **RESERVAS** - Formulario + Supabase
  4. **PRÓXIMA PELEA** - Countdown animado
  5. **HIGHLIGHTS** - Videos de peleas
  6. **TIENDA** - Camiseta oficial FREDDY ICE BOY
  7. **SOBRE FREDDY** - Bio y estadísticas
  8. **GALERÍA** - Fotos 3 columnas
  9. **CONTACTO** - Email, teléfono, redes sociales
  10. **FOOTER** - Links sociales

## 🛠️ Stack Tecnológico

- **Next.js 14+** con App Router
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **React 18**

## 📋 Requisitos

- Node.js 16+
- npm o yarn
- Cuenta Supabase (ya configurada)

## 🚀 Instalación y Uso

### 1. Instalar dependencias
```bash
npm install
```

### 2. Configurar Supabase (IMPORTANTE)

Ve a tu proyecto Supabase: https://app.supabase.com

En el editor SQL, copia y ejecuta el contenido de `SQL_SUPABASE.sql`:

```sql
-- Crear tabla de reservas
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
```

### 3. Iniciar desarrollo
```bash
npm run dev
```

Accede a: **http://localhost:3000**

### 4. Probar la reserva
- Ve a "Reservas"
- Llena el formulario (nombre, email, teléfono, **edad**, **arte marcial**, fecha, hora)
- Haz clic en "Reservar Clase"
- Los datos se guardarán automáticamente en Supabase

## 📦 Build para Producción

```bash
npm run build
npm start
```

## 🌐 Despliegue en Vercel

```bash
vercel
```

## 📝 Personalización

### Cambiar Videos de YouTube
Edita `src/components/Highlights.js` y reemplaza los enlaces en el array `videos`.

### Cambiar Productos de Tienda
Modifica `src/components/Shop.js` - array `products`.

### Cambiar Récord de Peleas
Actualiza `src/components/Record.js` - array `fights`.

### Cambiar Sponsors
Edita `src/components/Sponsors.js` - array `sponsors`.

### Cambiar Colores
En `tailwind.config.js`, modifica el objeto `colors.ice`.

## 📧 Contacto

Para soporte o personalizaciones adicionales, contacta al equipo de desarrollo.

---

**Hecho con ❄️ para ICE BOY - El Cazador de Sueños**
