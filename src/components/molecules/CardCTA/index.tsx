import Link from 'next/link'
import styles from './styles.module.scss'
import { IconArrowRight } from '@tabler/icons-react'

interface CardProps {
  image?: string
  projectName?: string
  link?: string
}

export const CardCTA = ({ image, projectName, link = '#' }: CardProps) => {
  return (
    <Link href={link} className={styles.card}>
      <article
        className={styles.card__image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.card__heading}>
        <p className={styles.card__text}>Conheça também</p>
        <div className={styles.card__title}>
          <p className={styles.card__projectName}>{projectName}</p>
          <IconArrowRight stroke={2} />
        </div>
      </div>
    </Link>
  )
}
