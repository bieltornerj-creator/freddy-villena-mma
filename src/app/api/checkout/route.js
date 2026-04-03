import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16',
})

export async function POST(req) {
  try {
    const { size, quantity } = await req.json()

    if (!size || !quantity) {
      return Response.json(
        { error: 'Faltan parámetros: size, quantity' },
        { status: 400 }
      )
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Camiseta Manga corta PERSONALIZADA Full Print 360º Multideporte',
              description: `Talla: ${size} | Cantidad: ${quantity}`,
              images: ['https://assets.cdn.filesafe.space/MyFJ6lhweMtzOUvBPwI3/media/69cfb733fa2dde9742f23ef6.png'],
            },
            unit_amount: 3550, // €35,50 en centavos
          },
          quantity: parseInt(quantity),
        },
      ],
      mode: 'payment',
      success_url: `${baseUrl}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/#tienda`,
      customer_email: null,
      locale: 'es',
    })

    return Response.json({ sessionId: session.id })
  } catch (error) {
    console.error('Error en checkout:', error)
    return Response.json(
      { error: error.message || 'Error al crear sesión de pago' },
      { status: 500 }
    )
  }
}
