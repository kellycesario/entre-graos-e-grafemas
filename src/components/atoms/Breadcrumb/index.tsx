import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons-react'
import styles from './styles.module.scss'

export interface BreadcrumbItem {
  label: string
  path: string
}

interface BreadcrumbProps {
  pathname: string
  locale: 'pt-BR' | 'en-US'
}

export const Breadcrumb = ({ pathname, locale }: BreadcrumbProps) => {
  const createBreadcrumbItems = (path: string) => {
    const segments = path.split('/').filter(Boolean)
    const items: BreadcrumbItem[] = [
      {
        label: locale === 'pt-BR' ? 'Início' : 'Home',
        path: '/',
      },
    ]

    segments.forEach((segment, index) => {
      const label = segment.replace(/-/g, ' ')
      const formattedLabel =
        label.charAt(0).toUpperCase() + label.slice(1).toLowerCase()
      const fullPath = '/' + segments.slice(0, index + 1).join('/')
      items.push({ label: formattedLabel, path: fullPath })
    })

    return items
  }

  const items = createBreadcrumbItems(pathname)

  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumb__list}>
        {items.map((item, index) => (
          <li key={item.label} className={styles.breadcrumb__item}>
            <Link
              href={item.path}
              className={
                index === items.length - 1 ? styles.breadcrumb__lastItem : ''
              }
            >
              {item.label}
            </Link>
            {index < items.length - 1 && <IconChevronRight size={12} />}
          </li>
        ))}
      </ul>
    </nav>
  )
}
