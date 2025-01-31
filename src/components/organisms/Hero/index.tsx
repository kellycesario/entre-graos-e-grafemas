'use client'

import { usePathname } from 'next/navigation'
import { IconArrowRight, IconCoffee } from '@tabler/icons-react'
import { Text } from '@/atoms/Text'
import { Button } from '@/atoms/Button'
import { Heading } from '@/atoms/Heading'
import { Breadcrumb } from '@/atoms/Breadcrumb'
import styles from './styles.module.scss'

export interface HeroProps {
  title?: string
  text?: string
  video?: string
  hasBreadcrumb?: boolean
  firstButtonLabel?: string
  secondButtonLabel?: string
  locale?: 'pt-BR' | 'en-US'
}

export const Hero = ({
  title,
  text,
  video,
  hasBreadcrumb = true,
  firstButtonLabel,
  secondButtonLabel,
  locale,
}: HeroProps) => {
  const pathname = usePathname()
  const contactLink = locale === 'pt-BR' ? '/contato' : '/contact-me'

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.hero__heading}>
        {hasBreadcrumb && <Breadcrumb pathname={pathname} locale={locale!} />}

        <Heading
          align="left"
          color="cordovan"
          level="1"
          weight="800"
          id="hero-title"
        >
          {title}
        </Heading>
        <Text align="left" color="gunmetal" weight="400">
          {text} &nbsp;
          <IconCoffee color="#481620" />
        </Text>
        <div className={styles.hero__buttons}>
          <Button
            hasIcon={true}
            icon={IconArrowRight}
            iconColor="white"
            iconSize={24}
            iconPosition="right"
            href="https://youtube.com/@arabiebezrihermont"
            label={firstButtonLabel}
            variant="primary"
            isButton={false}
            useButtonStyle={true}
            target="_blank"
          />
          <Button
            href={pathname === contactLink ? '#Contact' : contactLink}
            label={secondButtonLabel}
            variant="secondary"
            isButton={false}
            useButtonStyle={true}
          />
        </div>
      </div>
      <video autoPlay loop playsInline className={styles.hero__video}>
        <source src={video} type="video/mp4" />
        <track kind="captions" label="no captions" />
      </video>
    </section>
  )
}
