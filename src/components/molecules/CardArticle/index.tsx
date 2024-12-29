import Link from 'next/link'
import { Tag } from '@/atoms/Tag'
import { limitText } from '@/utils/limitText/limitText'
import styles from './styles.module.scss'

export interface CardProps {
  image: { url: string }
  tag?: string
  title?: string
  description?: string
  slug?: string
  project?: 'elinc' | 'alegria' | 'pesquisas'
  className?: string
}

export const CardArticle = ({
  image,
  tag,
  title,
  description,
  slug = '#',
  project,
  className,
}: CardProps) => {
  const cardStyle = [styles.card, project, className].join(' ')
  return (
    <Link href={`${project}/${slug}/`} className={cardStyle}>
      <article
        className={styles.card__image}
        style={{ backgroundImage: `url(${image.url})` }}
      />
      <div className={styles.card__textContainer}>
        <Tag backgroundColor="white" color="gunmetal" hasBackgroundColor={true}>
          {tag}
        </Tag>
        <div className={styles.card__heading}>
          <p className={styles.card__title}>{limitText(title ?? '', 127)}</p>
          <p className={styles.card__text}>
            {limitText(description ?? '', 215)}
          </p>
        </div>
      </div>
    </Link>
  )
}
