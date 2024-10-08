import Link from 'next/link'
import styles from './styles.module.scss'
import { Tag } from '@/atoms/Tag'
import { limitText } from '@/app/utils/limitText/limitText'

interface CardProps {
  image?: string
  tag?: string
  title?: string
  text?: string
  link?: string
}

export const CardArticle = ({
  image,
  tag,
  title,
  text,
  link = '#',
}: CardProps) => {
  return (
    <Link href={link} className={styles.card}>
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
