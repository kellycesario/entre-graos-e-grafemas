import Link from 'next/link'
import styles from './styles.module.scss'
import { Tag } from '@/components/atoms/Tag'
import { limitText } from '@/utils/limitText/limitText'

interface Image {
  url?: string
}
export interface CardProps {
  image?: string | Image
  tag?: string
  title?: string
  text?: string
  slug?: string
  project?: 'elinc' | 'alegria' | 'pesquisas'
  className?: string
}

export const CardArticle = ({
  image,
  tag,
  title,
  text,
  slug = '#',
  project,
  className,
}: CardProps) => {
  const cardStyle = [styles.card, project, className].join(' ')
  return (
    <Link href={`${project}/${slug}/`} className={cardStyle}>
      <article
        className={styles.card__image}
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className={styles.card__textContainer}>
        <Tag backgroundColor="white" color="gunmetal" hasBackgroundColor={true}>
          {tag}
        </Tag>
        <div className={styles.card__heading}>
          <p className={styles.card__title}>{limitText(title ?? '', 127)}</p>
          <p className={styles.card__text}>{limitText(text ?? '', 215)}</p>
        </div>
      </div>
    </Link>
  )
}
