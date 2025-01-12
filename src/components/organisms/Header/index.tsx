'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IconMenu2, IconArrowRight, IconX } from '@tabler/icons-react'
import { Logo } from '@/ions/Logo'
import { Button } from '@/atoms/Button'
import { NavigationItem } from '@/organisms/Footer'
import styles from './styles.module.scss'

interface HeaderProps {
  locale: 'pt-BR' | 'en-US'
  navigationItems: NavigationItem[]
}

export const Header = ({ locale, navigationItems }: HeaderProps) => {
  const pathname = usePathname()
  const [isMobileScreen, setIsMobileScreen] = useState<boolean>(false)
  const [isNavVisible, setIsNavVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        const isMobile = window.innerWidth < 1200
        setIsMobileScreen(isMobile)

        if (!isMobile) {
          setIsNavVisible(false)
        }
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev)
  }

  const itemsToDisplay = isMobileScreen
    ? navigationItems
    : navigationItems.slice(0, navigationItems.length - 2)

  return (
    <header className={styles.headerContainer}>
      <div
        className={`${styles.header} ${isNavVisible ? styles.header__open : ''}`}
      >
        <div className={styles.header__icons}>
          <Logo locale={locale} />
          {isMobileScreen && isNavVisible && (
            <IconX
              stroke={2}
              color="#8C4949"
              onClick={toggleNav}
              className={styles.header__icon}
            />
          )}
          {isMobileScreen && !isNavVisible && (
            <IconMenu2
              stroke={2}
              color="#8C4949"
              onClick={toggleNav}
              className={styles.header__icon}
            />
          )}
        </div>
        <nav aria-label={locale === 'pt-BR' ? 'Páginas' : 'Pages'} className={styles.header__navigation}>
          {(!isMobileScreen || isNavVisible) && (
            <>
              <ul className={styles.header__list}>
                {itemsToDisplay.map(({ item, href }) => (
                  <li
                    key={item}
                    className={`${styles.header__item} ${
                      pathname === href ? styles.header__activeItem : ''
                    }`}
                  >
                    <Link
                      href={href}
                      rel="noopener noreferrer"
                      style={{ fontWeight: pathname === href ? '700' : '400' }}
                      className={styles.header__link}
                      onClick={() => {
                        if (isMobileScreen) setIsNavVisible(false)
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              {!isMobileScreen && (
                <>
                  <Button
                    hasIcon={true}
                    icon={IconArrowRight}
                    iconSize={24}
                    label={locale === 'pt-BR' ? 'Sobre mim' : 'About me'}
                    variant="primary"
                    isButton={false}
                    href={locale === 'pt-BR' ? '/sobre-mim' : '/about-me'}
                    useButtonStyle={true}
                  />
                  <Button
                    href={locale === 'pt-BR' ? '/contato' : '/contact-me'}
                    label={
                      locale === 'pt-BR' ? 'Entre em contato' : 'Contact me'
                    }
                    variant="secondary"
                    isButton={false}
                    useButtonStyle={true}
                  />
                </>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
