'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { v4 as uuidv4 } from 'uuid'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import { CardPartner } from '@/molecules/CardPartner'
import styles from './styles.module.scss'
import { partnersCategories } from '@/data/translations/parcerias'

interface SocialNetwork {
  icon: string
  link: string
}

interface Partner {
  category: string
  name: string
  role: string
  description: string
  image: {
    image: { url: string }
    imageDescription: string
  }
  socialNetworkCollection: {
    items: SocialNetwork[]
  }
}

export interface PartnersWrapperProps {
  title?: string
  text?: string
  partners?: Partner[]
  locale?: 'pt-BR' | 'en-US'
}

export const PartnersWrapper = ({
  title,
  text,
  partners,
  locale,
}: PartnersWrapperProps) => {
  const currentLanguage = locale

  const getCategoryTranslation = (category: string): string => {
    return partnersCategories[currentLanguage!]?.[category] || category
  }

  const groupedPartners = partners!.reduce(
    (acc, partner) => {
      const { category } = partner
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(partner)
      return acc
    },
    {} as Record<string, Partner[]>
  )

  return (
    <section className={styles.partners} aria-labelledby="Partners">
      <div className={styles.partners__heading}>
        <Heading color="cordovan" level="2" weight="700" id="Partners">
          {title}
        </Heading>
        <Text>{text}</Text>
      </div>

      {Object.keys(groupedPartners).map((category) => {
        const categoryPartners = groupedPartners[category]

        return (
          <Swiper
            className={styles.partners__swiper}
            aria-labelledby="Category"
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
            key={uuidv4()}
          >
            <Heading
              color="cordovan"
              level="3"
              weight="600"
              className={styles.partners__category}
              id="Category"
            >
              {getCategoryTranslation(category)}
            </Heading>

            <div>
              {categoryPartners.map((partner: Partner) => (
                <SwiperSlide
                  key={partner.name}
                  className={styles.partners__cards}
                >
                  <CardPartner
                    name={partner.name}
                    role={partner.role}
                    description={partner.description}
                    image={partner.image.image.url}
                    imageDescription={partner.image.imageDescription}
                    socialNetwork={partner.socialNetworkCollection.items}
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
