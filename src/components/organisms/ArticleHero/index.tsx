'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LocalIcon } from '@/ions/LocalIcon'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import { Breadcrumb } from '@/atoms/Breadcrumb'
import { SocialIcons } from '@/molecules/SocialIcons'
import styles from './styles.module.scss'

interface ArticleHeroProps {
  title?: string
  author?: string
  date?: string
  image?: string
  alt: string
  locale: 'pt-BR' | 'en-US'
}

export const ArticleHero = ({
  title,
  author,
  date,
  image,
  alt,
  locale,
}: ArticleHeroProps) => {
  const pathname = usePathname()

  const [currentUrl, setCurrentUrl] = useState<string>('')

  useEffect(() => {
    const url = `${window.location.origin}${pathname}`
    setCurrentUrl(url)
  }, [pathname])

  const shareData = {
    title,
    url: currentUrl,
  }

  const shareMessage =
    locale === 'pt-BR'
      ? `Oi! 😊 Encontrei um artigo interessante que acho que você vai gostar de ler. Dê uma olhada: ${shareData.title} - ${shareData.url}`
      : `Hi! 😊 I found an interesting article that I think you will enjoy reading. Check it out: ${shareData.title} - ${shareData.url}`

  const shareUrls = {
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`,
  }

  return (
    <section className={styles.hero} aria-labelledby="Article">
      <div className={styles.hero__imageContainer}>
        {image && (
          <Image
            src={image}
            alt={alt}
            width={1106}
            height={400}
            priority
            className={styles.hero__image}
          />
        )}
        <LocalIcon
          icon="waves"
          width={85}
          height={41}
          fill="transparent"
          className={styles.hero__svg}
        />
      </div>
      <div className={styles.hero__heading}>
        <Breadcrumb pathname={pathname} locale={locale} />
        <Heading
          level="1"
          weight="800"
          id="Article"
          className={styles.hero__title}
        >
          {title}
        </Heading>
      </div>
      <div className={styles.hero__infoContainer}>
        <div className={styles.hero__info}>
          <Text className={styles.hero__author} weight="700" color="gunmetal">
            {locale === 'pt-BR'
              ? `Escrito por ${author}`
              : `Written by ${author}`}
          </Text>
          <LocalIcon icon="line-02" width={1} height={40} />
          <Text color="gunmetal" align="right" className={styles.hero__date}>
            {date}
          </Text>
        </div>
        <SocialIcons
          backgroundColor="black"
          whatsappHref={shareUrls.whatsapp}
        />
      </div>
    </section>
  )
}
