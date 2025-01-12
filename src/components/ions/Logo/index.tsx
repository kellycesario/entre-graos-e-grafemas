import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LocalIcon } from '@/ions/LocalIcon'

interface LogoProps {
  locale?: 'pt-BR' | 'en-US'
}

export const Logo = ({ locale = 'pt-BR' }: LogoProps) => {
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobileScreen(window.innerWidth < 1200)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const ariaLabel = locale === 'pt-BR' ? 'Início' : 'Homepage'

  return (
    <Link href="/" aria-label={ariaLabel}>
      {isMobileScreen ? (
        <LocalIcon icon="logo-mobile" width={106} height={34} />
      ) : (
        <LocalIcon icon="logo-desktop" width={197} height={49} />
      )}
    </Link>
  )
}
