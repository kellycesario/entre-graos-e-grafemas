import { LocalIcon } from '@/ions/LocalIcon'
import { Button } from '@/atoms/Button'
import { IconArrowRight } from '@tabler/icons-react'
import styles from './styles.module.scss'

interface ContactMeCTAProps {
  backgroundImage?: string
  backgroundColor?: string
}

export const ContactMeCTA = ({
  backgroundImage,
  backgroundColor,
}: ContactMeCTAProps) => {
  return (
    <section
      aria-labelledby="title"
      className={styles.contactMe}
      style={{
        background: `url(${backgroundImage}) no-repeat center center / cover`,
      }}
    >
      <LocalIcon
        icon="plus-up"
        width={48}
        height={24}
        fill="white"
        className={styles.contactMe__firstDecorator}
      />
      <div
        className={styles.contactMe__overlay}
        style={{
          backgroundColor: backgroundColor,
        }}
      />
      <p id="title" className={styles.contactMe__title}>
        Tem algo em mente? Fale comigo!
      </p>
      <Button
        hasIcon={true}
        icon={IconArrowRight}
        iconColor="#FFFFFF"
        iconSize={24}
        iconPosition="right"
        href="/contato"
        isButton={false}
        variant="secondary"
        secondaryColor="#FFFFFF"
        useButtonStyle={true}
        label="Entre em contato"
        className={styles.contactMe__button}
      />
      <LocalIcon
        icon="plus-down"
        width={48}
        height={24}
        fill="white"
        className={styles.contactMe__secondDecorator}
      />
    </section>
  )
}
