'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Logo } from '@/ions/Logo'
import { SocialIcons } from '@/molecules/SocialIcons'
import { ContactMeCTA } from '@/organisms/ContactMeCTA'
import navigationItems from '@/data/navigation.json'
import styles from './styles.module.scss'

interface FooterProps {
  hasCTA?: boolean
  backgroundImage?: string
  backgroundColor?: string
}

export const Footer = ({
  hasCTA,
  backgroundImage,
  backgroundColor,
}: FooterProps) => {
  const pathname = usePathname()
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobileScreen(window.innerWidth < 834)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const footerStyle = hasCTA
    ? `${styles.footer} ${styles.footerWithCTA}`
    : styles.footer

  return (
    <footer className={footerStyle}>
      {!isMobileScreen && hasCTA && (
        <ContactMeCTA
          backgroundImage={backgroundImage}
          backgroundColor={backgroundColor}
        />
      )}
      <div className={styles.footer__container}>
        <Logo />
        {isMobileScreen && hasCTA && (
          <ContactMeCTA
            backgroundImage={backgroundImage}
            backgroundColor={backgroundColor}
          />
        )}
        <nav aria-label="Páginas">
          <ul className={styles.footer__list}>
            {navigationItems.map(({ item, href }) => (
              <li key={item} className={styles.footer__item}>
                <Link
                  href={href}
                  rel="noopener noreferrer"
                  style={{ fontWeight: pathname === href ? '700' : '400' }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SocialIcons />
      </div>
    </footer>
  )
}
