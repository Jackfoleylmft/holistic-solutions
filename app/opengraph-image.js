import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Clinical Case Management — Nationwide | Holistic Solutions'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#4A3F35',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Top label */}
        <div
          style={{
            fontSize: 16,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#C4A882',
            marginBottom: 36,
            display: 'flex',
          }}
        >
          Clinical Case Management · Nationwide · Los Angeles, CA
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 400,
            color: '#FAF8F5',
            lineHeight: 1.08,
            marginBottom: 28,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <span>Holistic</span>
          <span style={{ color: '#C4A882', fontStyle: 'italic' }}>Solutions</span>
        </div>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 1,
            background: '#C4A882',
            marginBottom: 28,
            display: 'flex',
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 22,
            color: '#C8BEB4',
            fontWeight: 300,
            fontFamily: 'system-ui, sans-serif',
            display: 'flex',
          }}
        >
          Substance Use · Mental Health · Intervention Services
        </div>
      </div>
    ),
    { ...size }
  )
}
