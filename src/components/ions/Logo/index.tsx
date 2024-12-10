import Link from 'next/link'
import { useEffect, useState } from 'react'
import { LocalIcon } from '../LocalIcon'

export const Logo = () => {
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

  return (
    <Link href="/" aria-label="Início">
      {isMobileScreen ? (
        <LocalIcon icon="logo-mobile" width={106} height={34} />
      ) : (
        <LocalIcon icon="logo-desktop" width={197} height={49} />
      )}
    </Link>
  )
}
