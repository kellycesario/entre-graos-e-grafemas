import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons-react'
import styles from './styles.module.scss'

export interface BreadcrumbItem {
  label: string
  path: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className={styles.breadcrumb}>
      <ul className={styles.breadcrumb__list}>
        {items.map((item, index) => (
          <li key={index} className={styles.breadcrumb__item}>
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
