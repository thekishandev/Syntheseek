import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Basic health check - returns 200 if app is running
    return NextResponse.json(
      { 
        status: 'healthy',
        timestamp: new Date().toISOString(),
        service: 'Syntheseek AI Search Engine',
        sponsors: ['Cerebras', 'Meta Llama', 'Docker']
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'unhealthy',
        error: 'Service unavailable'
      },
      { status: 503 }
    );
  }
}
