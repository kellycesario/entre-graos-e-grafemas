import Link from 'next/link'
import styles from './styles.module.scss'
import { Tag } from '@/components/atoms/Tag'
import { limitText } from '@/utils/limitText/limitText'

interface CardProps {
  image?: string
  tag?: string
  title?: string
  text?: string
  link?: string
  project?: 'elinc' | 'alegria' | 'pesquisas'
  className?: string
}

export const CardArticle = ({
  image,
  tag,
  title,
  text,
  link = '#',
  project,
  className
}: CardProps) => {
  const cardStyle = [styles.card, project, className].join(' ')
  return (
    <Link href={link} className={cardStyle}>
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
