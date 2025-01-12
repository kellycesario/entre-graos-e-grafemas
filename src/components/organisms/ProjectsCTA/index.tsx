import Image from 'next/image'
import { IconArrowRight } from '@tabler/icons-react'
import { Text } from '@/atoms/Text'
import { Heading } from '@/atoms/Heading'
import { Button } from '@/atoms/Button'
import { Animation } from '@/molecules/Animation'
import styles from './styles.module.scss'

export interface ProjectsCTAProps {
  alt?: string
  image?: string
  title?: string
  text?: string
  firstButtonLabel?: string
  secondButtonLabel?: string
  firstButtonHref?: string
  secondButtonHref?: string
  direction?: 'row' | 'row-reverse'
  hasAnimation?: boolean
}

export const ProjectsCTA = ({
  alt = '',
  image = '',
  title,
  text,
  firstButtonLabel,
  secondButtonLabel,
  firstButtonHref,
  secondButtonHref,
  direction = 'row-reverse',
  hasAnimation = false,
}: ProjectsCTAProps) => {
  const CTAStyle = [
    styles.projectsCTA,
    styles[`projectsCTA--${direction}`],
  ].join(' ')

  return (
    <section className={CTAStyle} aria-labelledby={title}>
      <div className={styles.projectsCTA__heading}>
        <Heading
          align="left"
          color="cordovan"
          level="2"
          weight="700"
          id={title}
        >
          {title}
        </Heading>
        <Text>{text}</Text>
        <div className={styles.projectsCTA__buttons}>
          {firstButtonLabel && (
            <Button
              hasIcon
              icon={IconArrowRight}
              label={firstButtonLabel}
              variant="primary"
              href={firstButtonHref}
              isButton={false}
              useButtonStyle={true}
            />
          )}
          {secondButtonLabel && (
            <Button
              label={secondButtonLabel}
              variant="secondary"
              href={secondButtonHref}
              isButton={false}
              useButtonStyle={true}
            />
          )}
        </div>
      </div>
      <div className={styles.projectsCTA__container}>
        {hasAnimation ? (
          <Animation />
        ) : (
          <Image
            src={image}
            alt={alt}
            width={660}
            height={452}
            priority
            className={styles.projectsCTA__image}
          />
        )}
      </div>
    </section>
  )
}
