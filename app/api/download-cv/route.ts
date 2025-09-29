// app/api/download-cv/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { password } = await request.json()

  if (password === process.env.CV_DOWNLOAD_PASSWORD) {
    const driveUrl = process.env.CV_DRIVE_URL
    if (driveUrl) {
      return NextResponse.json({
        success: true,
        url: driveUrl,
        redirect: true
      })
    } else {
      return NextResponse.json({ success: false, error: 'CV URL not configured' }, { status: 500 })
    }
  }

  return NextResponse.json({ success: false, message: 'Plase contact me to get my resume' }, { status: 401 })
}