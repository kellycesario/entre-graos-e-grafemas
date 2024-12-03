'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { IconMenu2, IconArrowRight, IconX } from '@tabler/icons-react'
import { Logo } from '@/ions/Logo'
import { Button } from '@/atoms/Button'
import navigationItems from '@/data/navigation.json'
import styles from './styles.module.scss'

export const Header = () => {
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
          <Logo />
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
        <nav aria-label="Páginas" className={styles.header__navigation}>
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
                    label="Sobre mim"
                    variant="primary"
                    isButton={false}
                    href="/sobre-mim"
                    useButtonStyle={true}
                  />
                  <Button
                    href="/contato"
                    label="Entre em contato"
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
