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
    <footer className={styles.footer}>
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
            {navigationItems
              .slice(0, navigationItems.length - 1)
              .map(({ item, href }) => (
                <li
                  key={item}
                  className={`${styles.footer__item} ${
                    pathname === href ? styles.footer__activeItem : ''
                  }`}
                >
                  <Link
                    href={href}
                    rel="noopener noreferrer"
                    className={styles.footer__link}
                    style={{ fontWeight: pathname === href ? '700' : '400' }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
        <SocialIcons
          backgroundColor="cordovan"
          instagramHref="https://www.instagram.com/arabiebezrihermont/"
          linkedinHref="https://br.linkedin.com/in/arabie-bezri-hermont-7a52a839"
          facebookHref="https://www.facebook.com/arabie.hermont/"
          youtubeHref="https://youtube.com/@arabiebezrihermont"
        />
      </div>
    </footer>
  )
}
