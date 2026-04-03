import { supabase } from '@/lib/supabase'

export async function POST(req) {
  try {
    const { sessionId, size, quantity, email } = await req.json()

    if (!sessionId || !size || !quantity) {
      return Response.json(
        { error: 'Faltan parámetros: sessionId, size, quantity' },
        { status: 400 }
      )
    }

    // Guardar orden en Supabase
    const { data, error } = await supabase
      .from('orders')
      .insert([
        {
          stripe_session_id: sessionId,
          size: size,
          quantity: parseInt(quantity),
          email: email || 'sin-email@email.com',
          status: 'pendiente',
          created_at: new Date().toISOString(),
        },
      ])

    if (error) {
      throw error
    }

    return Response.json({ success: true, data })
  } catch (error) {
    console.error('Error al guardar orden:', error)
    return Response.json(
      { error: error.message || 'Error al guardar orden' },
      { status: 500 }
    )
  }
}

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url)
    const sessionId = searchParams.get('sessionId')

    if (!sessionId) {
      return Response.json(
        { error: 'sessionId requerido' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('stripe_session_id', sessionId)
      .single()

    if (error) {
      throw error
    }

    return Response.json({ success: true, data })
  } catch (error) {
    console.error('Error al obtener orden:', error)
    return Response.json(
      { error: error.message || 'Error al obtener orden' },
      { status: 500 }
    )
  }
}
