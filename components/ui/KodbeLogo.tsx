import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark'
  size?: 'sm' | 'md' | 'lg'
}

const sizes = { sm: 34, md: 44, lg: 58 }
const nameSize = { sm: 15, md: 19, lg: 24 }
const subSize  = { sm: 7,  md: 8,  lg: 10 }

export default function KodbeLogo({ variant = 'light', size = 'md' }: LogoProps) {
  const px        = sizes[size]
  const textColor = variant === 'light' ? '#ffffff' : '#0d2260'
  const subColor  = variant === 'light' ? 'rgba(255,255,255,0.65)' : '#64748b'

  return (
    <div className="flex items-center gap-2.5">
      <Image
        src="/kodbe-logo.svg"
        alt="KODBE Travel & Tours"
        width={px}
        height={px}
        priority
        className="flex-shrink-0 drop-shadow-md"
      />
      <div className="leading-none">
        <p
          className="font-display font-800 tracking-tight"
          style={{ color: textColor, fontSize: nameSize[size] }}
        >
          KODBE
        </p>
        <p
          className="font-body uppercase tracking-widest"
          style={{ color: subColor, fontSize: subSize[size], letterSpacing: '0.2em' }}
        >
          Travel &amp; Tours
        </p>
      </div>
    </div>
  )
}
