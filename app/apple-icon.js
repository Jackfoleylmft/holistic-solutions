import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#4A3F35',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 36,
          fontFamily: 'Georgia, serif',
        }}
      >
        <span style={{ fontSize: 100, color: '#C4A882', fontWeight: 400 }}>
          HS
        </span>
      </div>
    ),
    { ...size }
  )
}
