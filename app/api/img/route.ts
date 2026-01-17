import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get('url')
  if (!url) return new NextResponse('No URL', { status: 400 })

  try {
    const res = await fetch(url)
    const blob = await res.blob()
    return new NextResponse(blob, {
      headers: {
        'Content-Type': res.headers.get('Content-Type') || 'image/jpeg',
        'Access-Control-Allow-Origin': '*', // Allows html2canvas to read the data
      },
    })
  } catch (e) {
    return new NextResponse('Error fetching image', { status: 500 })
  }
}
