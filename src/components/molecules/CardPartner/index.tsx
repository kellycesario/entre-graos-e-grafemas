import Image from 'next/image'
import styles from './styles.module.scss'

interface CardProps {
  name?: string
  role?: string
  description?: string
  image?: string
}

export const CardPartner = ({ name, role, description, image }: CardProps) => {
  return (
    <article className={styles.card}>
      {image && (
        <Image
          src={image}
          alt=""
          width={500}
          height={600}
          className={styles.card__image}
        />
      )}
      <div className={styles.card__container}>
        <div className={styles.card__heading}>
          <p className={styles.card__name}>{name}</p>
          <p className={styles.card__role}>{role}</p>
        </div>
        <p className={styles.card__description}>{description}</p>
      </div>
    </article>
  )
}
