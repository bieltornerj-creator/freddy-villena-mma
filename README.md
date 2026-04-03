# Freddy Villena - ICE BOY | Sitio Web Profesional de MMA

Web one-page profesional para Freddy Villena, luchador de MMA apodado "ICE BOY".

## 🚀 Características

- **Diseño Oscuro y Premium**: Colores negro, blanco y azul hielo (#00d4ff)
- **Responsive Mobile-First**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Con Framer Motion
- **Scroll Suave**: Navegación fluida
- **Navbar Fija**: Con efecto backdrop blur
- **10 Secciones**:
  1. **HERO** - Presentación con CTA
  2. **RECORD** - Tabla de peleas profesionales
  3. **PRÓXIMO COMBATE** - Countdown animado
  4. **HIGHLIGHTS** - Grid de videos YouTube
  5. **TIENDA** - Cards de productos
  6. **SOBRE FREDDY** - Bio y estadísticas
  7. **GALERÍA** - Grid de fotos 3 columnas
  8. **SPONSORS** - Logos de patrocinadores
  9. **CONTACTO** - Formulario de contacto
  10. **FOOTER** - Links sociales

## 🛠️ Stack Tecnológico

- **Next.js 14+** con App Router
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **React 18**

## 📋 Requisitos

- Node.js 16+
- npm o yarn

## 🚀 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Acceder a
# http://localhost:3000
```

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
