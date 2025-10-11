import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Korean Name Generator'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #faf5ff 0%, #fce7f3 50%, #eff6ff 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        {/* Title */}
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            background: 'linear-gradient(135deg, #9333ea 0%, #ec4899 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            marginBottom: 20,
          }}
        >
          Korean Name Generator
        </div>
        
        {/* Korean Text */}
        <div
          style={{
            fontSize: 60,
            color: '#4b5563',
            marginBottom: 40,
          }}
        >
          한국 이름 생성기
        </div>
        
        {/* Description */}
        <div
          style={{
            fontSize: 32,
            color: '#6b7280',
            textAlign: 'center',
            maxWidth: '900px',
          }}
        >
          Discover your perfect Korean name with meanings, pronunciation, and cultural significance
        </div>
        
        {/* Flag */}
        <div
          style={{
            fontSize: 60,
            marginTop: 40,
          }}
        >
          🇰🇷
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}

