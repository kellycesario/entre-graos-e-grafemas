'use client'
import { useState } from 'react'
import { ImageWrapper } from '@/atoms/Image'
import images from '@/data/images.json'
import styles from './styles.module.scss'
import { Button } from '@/atoms/Button'

export const GalleryV2 = () => {
  const [visibleImages, setVisibleImages] = useState(5)

  const loadMoreImages = () => {
    setVisibleImages((prev) => prev + 5)
  }
  return (
    <section className={styles.gallery} aria-label="">
      {images.slice(0, visibleImages).map((image) => (
        <ImageWrapper
          key={image.src}
          alt={image.alt}
          src={image.src}
          className={styles.gallery__image}
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
