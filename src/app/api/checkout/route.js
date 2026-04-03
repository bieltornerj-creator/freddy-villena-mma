import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  const { size, quantity } = await request.json()

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Camiseta Manga corta PERSONALIZADA Full Print 360º Multideporte',
              description: `Talla: ${size} | Cantidad: ${quantity}`,
              images: ['https://assets.cdn.filesafe.space/freddy-villena-camiseta-front.jpg'],
            },
            unit_amount: 3550,
          },
          quantity,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/#tienda`,
      metadata: {
        size,
        quantity,
      },
    })

    return Response.json({ sessionId: session.id, url: session.url })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
