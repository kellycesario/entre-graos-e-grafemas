'use client'

import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { ImageWrapper } from '@/atoms/Image'
import { Button } from '@/atoms/Button'
import styles from './styles.module.scss'

export interface Image {
  media: string
  imageDescription: string
}

interface GalleryProps {
  images: Image[]
  hasImages?: boolean
}

export const GalleryV2 = ({ images, hasImages }: GalleryProps) => {
  const [visibleImages, setVisibleImages] = useState(5)

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 5)
  }
  if (!hasImages) return null

  return (
    <section className={styles.gallery} aria-label="">
      {images.slice(0, visibleImages).map((image, index) => (
        <ImageWrapper
          key={uuidv4()}
          imageDescription={image.imageDescription}
          media={image.media}
          className={styles.gallery__image}
          width={index === 2 ? 669 : 324}
          height={index === 2 ? 542 : 260}
        />
      ))}
      {visibleImages < images.length && (
        <Button
          label="Carregar mais imagens"
          variant="primary"
          onClick={loadMoreImages}
        />
      )}
    </section>
  )
}
