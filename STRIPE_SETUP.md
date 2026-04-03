# Configuración de Stripe

Esta web está integrada con Stripe para procesar pagos de forma segura.

## 🔧 Configuración Inicial

### 1. Obtener las claves de Stripe

1. Ve a https://dashboard.stripe.com
2. Inicia sesión con tu cuenta Stripe
3. Ve a **Settings** → **API keys**
4. Copia tu **Publishable key** (comienza con `pk_`)
5. Copia tu **Secret key** (comienza con `sk_`)

### 2. Actualizar .env.local

En `C:\Users\biel\freddy-villena-mma\.env.local`:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_tu_clave_aqui
STRIPE_SECRET_KEY=sk_live_tu_clave_aqui
```

## 💳 Producto Configurado

**Camiseta Manga corta PERSONALIZADA Full Print 360º Multideporte**
- Precio: €35,50 (3550 centavos)
- Código: `camiseta_freddy_ice_boy`

## 🧪 Modo Prueba (Sandbox)

Si quieres probar sin cobrar dinero real:

1. Ve a https://dashboard.stripe.com
2. En la esquina superior izquierda, activa **Test mode**
3. Copia las claves de prueba (test keys)
4. Actualiza `.env.local` con las claves test

Números de tarjeta de prueba:
- **4242 4242 4242 4242** - Pago exitoso
- **4000 0000 0000 0002** - Pago rechazado

## 🔐 Seguridad

- El Secret Key NUNCA debe exponerse públicamente
- Usa variables de entorno (`.env.local`)
- El `.env.local` está en `.gitignore` (no se subirá a GitHub)

## 📊 Monitorar Pagos

Ve a https://dashboard.stripe.com → Payments para ver todos los pagos

## 🎛️ Ajustar Precio del Producto

En `src/api/checkout/route.js`, línea 23:
```javascript
unit_amount: 3550, // €35,50 en centavos (cambia este número)
```

Para cambiar a otro precio, multiplica por 100:
- €40 → 4000
- €50 → 5000
- €20 → 2000

## 🌐 Desplegar en Producción

1. Ve a Vercel o tu plataforma de hosting
2. Añade las variables de entorno:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
3. Configura `NEXT_PUBLIC_BASE_URL` con tu dominio

## 📞 Soporte

Para problemas con Stripe: https://support.stripe.com
