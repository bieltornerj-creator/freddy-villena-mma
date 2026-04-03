import { supabase } from '@/lib/supabase'

export async function POST(request) {
  const { stripe_session_id, size, quantity, email, status } = await request.json()

  try {
    const { data, error } = await supabase.from('orders').insert([
      {
        stripe_session_id,
        size,
        quantity,
        email,
        status: status || 'pendiente',
      },
    ])

    if (error) throw error

    return Response.json({ success: true, data })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('sessionId')

  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('stripe_session_id', sessionId)
      .single()

    if (error) throw error

    return Response.json({ data })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
