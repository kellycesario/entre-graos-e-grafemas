import { v4 as uuidv4 } from 'uuid'
import { Icon as CustomIcon } from '@/ions/Icon'
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconWorldWww,
  IconMail,
  IconBook,
  IconBookmark,
} from '@tabler/icons-react'
import styles from './styles.module.scss'
import { ImageWrapper } from '@/components/atoms/Image'

interface CardProps {
  socialNetwork?: { icon: string; link: string }[]
  name?: string
  role?: string
  description?: string
  image?: string
  imageDescription: string
}

const availableIcons = {
  Instagram: IconBrandInstagram,
  Youtube: IconBrandYoutube,
  Linkedin: IconBrandLinkedin,
  Facebook: IconBrandFacebook,
  Website: IconWorldWww,
  Email: IconMail,
  Lattes: IconBook,
  ResearchGate: IconBookmark,
}

export const CardPartner = ({
  name,
  role,
  description,
  image,
  imageDescription,
  socialNetwork,
}: CardProps) => {
  const id = uuidv4()

  const iconsToRender = socialNetwork?.map(({ icon, link }) => {
    const IconComponent = availableIcons[icon as keyof typeof availableIcons]

    const ariaLabel = `${icon}`

    if (!IconComponent) return null

    return (
      <a href={link} key={link} aria-label={ariaLabel}>
        <CustomIcon Icon={IconComponent} color="#1c1c1c" size={24} />
      </a>
    )
  })

  return (
    <article className={styles.card} aria-labelledby={id}>
      {image && (
        <ImageWrapper
          image={image}
          imageDescription={imageDescription}
          width={500}
          height={600}
          className={styles.card__image}
        />
      )}
      <div className={styles.card__container}>
        <div className={styles.card__heading}>
          <p className={styles.card__name} id={id}>
            {name}
          </p>
          <p className={styles.card__role}>{role}</p>
        </div>
        <p className={styles.card__description}>{description}</p>
        <div className={styles.card__icons}>{iconsToRender}</div>
      </div>
    </article>
  )
}
