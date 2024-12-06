'use client'
import { v4 as uuidv4 } from 'uuid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import { CardPartner } from '@/molecules/CardPartner'
import partnerCategories from '@/data/partnerCategories.json'
import styles from './styles.module.scss'

interface PartnersWrapperProps {
  title?: string
  text?: string
}

export const PartnersWrapper = ({ title, text }: PartnersWrapperProps) => {
  const sectionId = uuidv4()

  return (
    <section className={styles.partners} aria-labelledby={sectionId}>
      <div className={styles.partners__heading}>
        <Heading color="cordovan" level="2" weight="700" id={sectionId}>
          {title}
        </Heading>
        <Text>{text}</Text>
      </div>
      {partnerCategories.map(({ category, partners }) => {
        const categoryId = uuidv4()
        return (
          <Swiper
            className={styles.partners__swiper}
            aria-labelledby={categoryId}
            style={
              {
                '--swiper-pagination-color': '#8c4949',
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
            key={categoryId}
          >
            <Heading
              color="cordovan"
              level="3"
              weight="600"
              className={styles.partners__category}
              id={categoryId}
            >
              {category}
            </Heading>
            <div>
              {partners.map((partner) => (
                <SwiperSlide
                  key={partner.name}
                  className={styles.partners__cards}
                >
                  <CardPartner
                    name={partner.name}
                    role={partner.role}
                    description={partner.description}
                    image={partner.image}
                    icons={partner.icons}
                  />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        )
      })}
    </section>
  )
}
