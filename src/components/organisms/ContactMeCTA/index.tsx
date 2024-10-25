import Image from 'next/image'
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
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <Image
        src="/svgs/PlusUp.svg"
        alt=""
        className={styles.contactMe__firstDecorator}
        width={48}
        height={24}
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
      <Image
        src="/svgs/PlusDown.svg"
        alt=""
        className={styles.contactMe__secondDecorator}
        width={48}
        height={24}
      />
    </section>
  )
}
