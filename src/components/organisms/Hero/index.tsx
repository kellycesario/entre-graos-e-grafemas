'use client'
import { usePathname } from 'next/navigation'
import { IconArrowRight, IconCoffee } from '@tabler/icons-react'
import { Text } from '@/atoms/Text'
import { Button } from '@/atoms/Button'
import { Heading } from '@/atoms/Heading'
import { Breadcrumb } from '@/atoms/Breadcrumb'
import styles from './styles.module.scss'

interface HeroProps {
  title?: string
  text?: string
  video?: string
  hasBreadcrumb?: boolean
}

export const Hero = ({
  title,
  text,
  video,
  hasBreadcrumb = true,
}: HeroProps) => {
  const pathname = usePathname()

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.hero__heading}>
        {hasBreadcrumb && <Breadcrumb pathname={pathname} />}

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
            href=""
            label="Explore projetos"
            variant="primary"
            isButton={false}
            useButtonStyle={true}
          />
          <Button
            href=""
            label="Entre em contato"
            variant="secondary"
            isButton={false}
            useButtonStyle={true}
          />
        </div>
      </div>
      <video autoPlay loop className={styles.hero__video}>
        <source src={video} type="video/mp4" />
        <track kind="captions" label="no captions" />
      </video>
    </section>
  )
}
