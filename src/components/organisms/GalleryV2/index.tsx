'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { ImageWrapper } from '@/atoms/Image'
import { Button } from '@/atoms/Button'
import styles from './styles.module.scss'

export interface Image {
  image: string
  imageDescription: string
}

interface GalleryProps {
  images: Image[]
  hasImages?: boolean
  locale?: 'pt-BR' | 'en-US'
}

export const GalleryV2 = ({ images, hasImages, locale }: GalleryProps) => {
  const [visibleImages, setVisibleImages] = useState(5)

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 5)
  }
  if (!hasImages) return null

  const ariaLabel = locale === 'pt-BR' ? 'Galeria de imagens' : 'Images gallery'

  const loadMoreText =
    locale === 'pt-BR' ? 'Carregar mais imagens' : 'Load more images'

  return (
    <section className={styles.gallery} aria-label={ariaLabel}>
      {images.slice(0, visibleImages).map((image, index) => (
        <ImageWrapper
          key={uuidv4()}
          imageDescription={image.imageDescription}
          image={image.image}
          className={styles.gallery__image}
          width={index === 2 ? 669 : 324}
          height={325}
        />
      ))}
      {visibleImages < images.length && (
        <Button
          label={loadMoreText}
          variant="primary"
          onClick={loadMoreImages}
        />
      )}
    </section>
  )
}
