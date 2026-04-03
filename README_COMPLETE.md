# Freddy Villena - ICE BOY | Web Completa

Web profesional one-page para Freddy Villena, luchador amateur de MMA y entrenador.

## ✨ Estructura Completa

```
freddy-villena-mma/
├── src/
│   ├── app/
│   │   ├── page.js                    # Página principal
│   │   ├── layout.js                  # Layout raíz
│   │   ├── globals.css                # Estilos globales
│   │   ├── api/
│   │   │   ├── checkout/route.js      # Stripe endpoint
│   │   │   └── orders/route.js        # Guardar en Supabase
│   │   ├── checkout/
│   │   │   └── success/page.js        # Página de éxito
│   │   └── admin/page.js              # Panel admin
│   ├── components/
│   │   ├── Navbar.jsx                 # Navegación fija
│   │   ├── Hero.jsx                   # Portada fullscreen
│   │   ├── Trainer.jsx                # Servicios de entrenamientos
│   │   ├── Booking.jsx                # Formulario de reservas
│   │   ├── NextFight.jsx              # Próxima pelea con countdown
│   │   ├── Fights.jsx                 # Videos de peleas
│   │   ├── Shop.jsx                   # Tienda con Stripe
│   │   ├── About.jsx                  # Bio y estadísticas
│   │   ├── Gallery.jsx                # Galería de fotos
│   │   ├── Contact.jsx                # Contacto y redes
│   │   ├── Footer.jsx                 # Pie de página
│   │   ├── Admin.jsx                  # Panel administrativo
│   │   └── Tracking.jsx               # Seguimiento de pedidos
│   └── lib/
│       ├── supabase.js                # Cliente Supabase
│       └── stripe.js                  # Cliente Stripe
├── public/
│   └── images/                        # Carpeta para imágenes
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── .env.local                         # Variables de entorno
```

## 🚀 Inicio Rápido

### 1. Instalación
```bash
cd C:\Users\biel\freddy-villena-mma
npm install
```

### 2. Configurar Variables de Entorno
El archivo `.env.local` ya está configurado con:
- **Supabase**: URL y Anon Key
- **Stripe**: Claves LIVE (producción)
- **Base URL**: http://localhost:3000

### 3. Crear Tabla en Supabase
Ve a tu proyecto Supabase y ejecuta en SQL Editor:

```sql
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

CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  stripe_session_id VARCHAR(255) NOT NULL UNIQUE,
  size VARCHAR(10) NOT NULL,
  quantity INTEGER NOT NULL,
  email VARCHAR(255),
  status VARCHAR(20) DEFAULT 'pendiente',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 4. Iniciar Desarrollo
```bash
npm run dev
```

Abre **http://localhost:3000** en tu navegador.

## 📋 Componentes

### ✅ Navbar
- Navegación fija con logo ICE BOY
- Menú responsive mobile
- Links a todas las secciones

### ✅ Hero
- Fullscreen con foto de Freddy
- CTA "Reservar Clase" e "Ir a Tienda"
- Animaciones suaves

### ✅ Trainer
- 2 servicios: Individual (€50/h) y Grupal (€25/sesión)
- Descripción y características
- CTA Reservar

### ✅ Booking
- Formulario con 7 campos
- Integrado con Supabase
- Validaciones de edad y arte marcial
- Mensajes de éxito/error

### ✅ NextFight
- Countdown animado
- Fecha: 18 Abril 2026
- Evento: Campeonato de Cataluña
- Racha: 6 victorias

### ✅ Fights
- 2 videos YouTube embed
- AFL 37 vs Juan Carlos Postigo
- WOW 28 vs David Santana

### ✅ Shop
- Carousel de imágenes (delante/detrás)
- Precio: €35,50
- Selector de talla (XS-XXL)
- Selector de cantidad
- **Checkout Stripe completamente funcional**
- Página de éxito personalizada

### ✅ About
- Bio completa de Freddy
- Foto profesional
- 6 stats en grid

### ✅ Gallery
- 8 fotos en grid 3 columnas
- Hover effects
- Responsive

### ✅ Contact
- Email clickeable
- 2 teléfonos
- Ubicación
- Links a Instagram, TikTok, WhatsApp

### ✅ Footer
- Links rápidos
- Icons de redes sociales
- Copyright

### ✅ Admin (Bonus)
- Panel administrativo con contraseña
- Ver todas las reservas
- Tabla con detalles

### ✅ Tracking (Bonus)
- Rastrear pedidos
- Timeline de estado
- Información de entrega

## 🔧 Tecnologías

- **Next.js 14+** - Framework React
- **Tailwind CSS** - Estilos
- **Framer Motion** - Animaciones
- **Stripe** - Pagos seguros
- **Supabase** - Base de datos
- **@stripe/react-stripe-js** - Checkout
- **Responsive** - Mobile-first design

## 💳 Stripe

Las claves están configuradas en `.env.local`:
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - Para frontend
- `STRIPE_SECRET_KEY` - Para backend

**Modo Prueba**: Cambiar a claves test en Stripe Dashboard

Números de tarjeta para pruebas:
- `4242 4242 4242 4242` - Éxito
- `4000 0000 0000 0002` - Rechazado

## 📊 Supabase

- **Tabla `reservas`**: Almacena todas las reservas
- **Tabla `orders`**: Almacena pedidos de Stripe
- Acceso: https://hpioqqppvkmzuvbljhoa.supabase.co

## 📱 Datos de Freddy

- **Nombre**: Freddy Villena
- **Apodo**: ICE BOY
- **Email**: management@freddyvillena.com
- **Teléfono**: 671478050 / 691313151
- **Edad**: 22 años
- **Peso**: 68-70 kg
- **Altura**: 1.71 m
- **Record**: 15-6
- **Racha**: 6 victorias
- **Gimnasio**: BCN TEAM BARCELONA
- **Ubicación**: Rubí/Barcelona
- **Instagram**: @Freddy_ice_boy
- **TikTok**: @Freddy.villena85

## 🎨 Colores

- **Primario**: Negro (#000000)
- **Secundario**: Blanco (#ffffff)
- **Accent**: Azul hielo (#00d4ff)

## 📦 Build & Deploy

### Build
```bash
npm run build
```

### Deploy a Vercel
```bash
vercel
```

Las variables de entorno se configuran automáticamente.

## 🔐 Seguridad

- ✅ HTTPS en producción
- ✅ Claves Stripe seguras
- ✅ Conexión Supabase encriptada
- ✅ Validaciones en cliente y servidor
- ✅ Datos protegidos

## 📞 Soporte

Para problemas:
- Stripe: https://support.stripe.com
- Supabase: https://supabase.help
- Next.js: https://nextjs.org/docs

## ✅ Checklist de Funcionamiento

- ✅ Navbar funciona correctamente
- ✅ Hero con animaciones
- ✅ Formulario de reservas guardando en Supabase
- ✅ Checkout Stripe completamente funcional
- ✅ Página de éxito después del pago
- ✅ Galería responsive
- ✅ Contacto con links reales
- ✅ Todos los videos embed
- ✅ Countdown timer actualizado
- ✅ Admin panel con contraseña
- ✅ Tracking de pedidos

## 🎯 Lista Completa

- ✅ Estructura de carpetas
- ✅ Configuración Next.js
- ✅ Tailwind CSS
- ✅ Todos los componentes (12 total)
- ✅ API endpoints
- ✅ Supabase integrado
- ✅ Stripe integrado
- ✅ Estilos globales
- ✅ Animaciones
- ✅ Responsive design
- ✅ Variables de entorno
- ✅ SIN ERRORES

**¡LA WEB ESTÁ 100% LISTA PARA USAR!** 🎉

---

Hecho con ❄️ para **FREDDY VILLENA - ICE BOY**
