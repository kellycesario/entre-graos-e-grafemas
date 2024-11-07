import Link from 'next/link'
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandFacebook,
} from '@tabler/icons-react'
import styles from './styles.module.scss'

interface SocialIconsProps {
  backgroundColor?: string
}

const socialLinks = [
  {
    href: 'https://instagram.com',
    icon: IconBrandInstagram,
    aria: 'Instagram',
  },
  { href: 'https://linkedin.com', icon: IconBrandLinkedin, aria: 'Linkedin' },
  { href: 'https://facebook.com', icon: IconBrandFacebook, aria: 'Facebook' },
  { href: 'https://youtube.com', icon: IconBrandYoutube, aria: 'Youtube' },
]

export const SocialIcons = ({ backgroundColor }: SocialIconsProps) => {
  const itemStyle = [
    styles[`socialIcons__item`],
    styles[`socialIcons__item--${backgroundColor}`],
  ].join(' ')
  return (
    <nav className={styles.socialIcons} aria-label="Redes Sociais">
      <ul className={styles.socialIcons__list}>
        {socialLinks.map(({ href, icon: Icon, aria }) => (
          <li key={aria} className={itemStyle}>
            <Link
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={aria}
              className={styles.socialIcons__link}
            >
              <Icon aria-hidden="true" color="white" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
