import { NextRequest, NextResponse } from 'next/server'
 
export async function GET(
    request: NextRequest,
  ) {
    return new NextResponse("Ello ello ello", { status: 200 })
  }