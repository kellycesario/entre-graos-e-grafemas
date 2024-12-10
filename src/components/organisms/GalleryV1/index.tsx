'use client'

import { v4 as uuidv4 } from 'uuid'
import { ImageWrapper } from '@/atoms/Image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import images from '@/data/images.json'
import styles from './styles.module.scss'

export const GalleryV1 = () => {
  const id = uuidv4()

  return (
    <section className={styles.gallery} aria-labelledby={id}>
      <Swiper
        style={
          {
            '--swiper-pagination-color': '#177F9C',
          } as React.CSSProperties
        }
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          834: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay]}
        key={id}
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.src}
            className={styles.gallery__imageContainer}
          >
            <ImageWrapper
              alt={image.alt}
              src={image.src}
              className={styles.gallery__image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
