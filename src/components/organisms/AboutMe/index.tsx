'use client'

import { Heading } from '@/atoms/Heading'
import { RichText } from '@/atoms/RichText'
import { ImageWrapper } from '@/atoms/Image'
import styles from './styles.module.scss'

interface AboutMeProps {
  title?: string
  media: string
  imageDescription: string
  content: any
}

export const AboutMe = ({
  title,
  media,
  imageDescription,
  content,
}: AboutMeProps) => {
  return (
    <section className={styles.about}>
      <div className={styles.about__imageContainer}>
        <ImageWrapper
          imageDescription={imageDescription}
          media={media}
          width={450}
          height={450}
          className={styles.about__image}
        />
      </div>
      <div className={styles.about__content}>
        <Heading level="2" color="cordovan" weight="700">
          {title}
        </Heading>
        <RichText
          content={content}
          className={styles.about__text}
          imagesV1={[]}
          imagesV2={[]}
          hasImagesV1={false}
          hasImagesV2={false}
        />
      </div>
    </section>
  )
}
