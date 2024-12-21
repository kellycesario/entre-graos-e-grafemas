import { LargeButton } from '@/atoms/LargeButton'
import { Tag } from '@/atoms/Tag'
import styles from './styles.module.scss'

export interface CardProps {
  image?: string
  title?: string
  tag?: string
  link?: string
  className?: string
}

export const CardVideo = ({
  image,
  title,
  tag,
  link,
  className,
}: CardProps) => {
  const cardStyle = [styles.card, className].join(' ')

  const decodeHtml = (html: string) => {
    const txt = document.createElement('textarea')
    txt.innerHTML = html
    return txt.value
  }

  return (
    <article className={cardStyle} aria-label={title}>
      <div
        className={styles.card__image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.card__heading}>
        {tag && <Tag color="white">{tag}</Tag>}
        <p className={styles.card__title}>{decodeHtml(title ?? '')}</p>
      </div>
      <div className={styles.card__player}>
        <LargeButton link={link} title={title} />
      </div>
    </article>
  )
}
