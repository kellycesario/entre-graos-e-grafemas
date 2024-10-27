import { Tag } from '@/atoms/Tag'
import styles from './styles.module.scss'
import { LargeButton } from '@/atoms/LargeButton'

interface CardProps {
  image?: string
  title?: string
  tag?: string
  link?: string
}

export const CardVideo = ({ image, title, tag, link }: CardProps) => {
  return (
    <article className={styles.card} aria-label={title}>
      <div
        className={styles.card__image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.card__heading}>
        {tag && <Tag color="white">{tag}</Tag>}
        <p className={styles.card__title}>{title}</p>
      </div>
      <div className={styles.card__player}>
        <LargeButton link={link} title={title} />
      </div>
    </article>
  )
}
