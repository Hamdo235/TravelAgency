import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json({ error: 'Utilisez Web3Forms directement.' }, { status: 410 })
}
