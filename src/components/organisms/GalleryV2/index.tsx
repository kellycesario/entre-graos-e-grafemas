'use client'

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
      {images.slice(0, visibleImages).map((image) => (
        <ImageWrapper
          key={image.media}
          imageDescription={image.imageDescription}
          media={image.media}
          className={styles.gallery__image}
          width={500}
          height={500}
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
