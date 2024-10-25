import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { IconArrowRight } from '@tabler/icons-react'
import { Text } from '@/atoms/Text'
import { Heading } from '@/atoms/Heading'
import { Button } from '@/atoms/Button'
import styles from './styles.module.scss'

interface ProjectsCTAProps {
  alt?: string
  image?: string
  title?: string
  text?: string
  firstButtonLabel?: string
  secondButtonLabel?: string
  firstButtonHref?: string
  secondButtonHref?: string
  direction?: 'row' | 'row-reverse'
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
}: ProjectsCTAProps) => {
  const id = uuidv4()

  const CTAStyle = [
    styles.projectsCTA,
    styles[`projectsCTA--${direction}`],
  ].join(' ')

  return (
    <section className={CTAStyle} aria-labelledby={id}>
      <div className={styles.projectsCTA__heading}>
        <Heading align="left" color="cordovan" level="2" weight="700" id={id}>
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
      <Image
        src={image}
        alt={alt}
        width={542}
        height={452}
        className={styles.projectsCTA__image}
      />
    </section>
  )
}
