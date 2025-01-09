import { IconArrowRight } from '@tabler/icons-react'
import { LocalIcon } from '@/ions/LocalIcon'
import { Button } from '@/atoms/Button'
import styles from './styles.module.scss'

interface ContactMeCTAProps {
  locale?: 'pt-BR' | 'en-US'
  backgroundImage?: string
  backgroundColor?: string
}

export const ContactMeCTA = ({
  locale,
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
        {locale === 'pt-BR'
          ? 'Tem algo em mente? Fale comigo!'
          : 'Got something on your mind? Talk to me!'}
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
        label={locale === 'pt-BR' ? 'Entre em contato' : 'Contact me'}
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
