import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { Icon as CustomIcon } from '@/ions/Icon'
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandLinkedin,
  IconBrandFacebook,
} from '@tabler/icons-react'
import styles from './styles.module.scss'
interface CardProps {
  icons?: { Icon: string; link: string }[]
  name?: string
  role?: string
  description?: string
  image?: string
}

const availableIcons = {
  Instagram: IconBrandInstagram,
  Youtube: IconBrandYoutube,
  Linkedin: IconBrandLinkedin,
  Facebook: IconBrandFacebook,
}

export const CardPartner = ({
  name,
  role,
  description,
  image,
  icons,
}: CardProps) => {
  const id = uuidv4()

  const iconsToRender = icons?.map(({ Icon, link }) => {
    const IconComponent = availableIcons[Icon as keyof typeof availableIcons]

    const ariaLabel = `${Icon}`

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
