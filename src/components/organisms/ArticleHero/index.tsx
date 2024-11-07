import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
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
}

export const ArticleHero = ({
  title,
  author,
  date,
  image,
  alt,
}: ArticleHeroProps) => {
  const id = uuidv4()

  return (
    <section className={styles.hero} aria-labelledby={id}>
      <div className={styles.hero__imageContainer}>
        {image && (
          <Image
            src={image}
            alt={alt}
            width={360}
            height={360}
            className={styles.hero__image}
          />
        )}
        <svg
          width="85"
          height="41"
          viewBox="0 0 85 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.hero__svg}
        >
          <path
            d="M0 1C4.7 1 4.70002 6.10004 9.40002 6.10004C14.1 6.10004 14.1 1 18.8 1C23.5 1 23.5 6.10004 28.2 6.10004C32.9 6.10004 32.9 1 37.6 1C42.3 1 42.3 6.10004 47 6.10004C51.7 6.10004 51.7 1 56.4 1C61.1 1 61.1 6.10004 65.8 6.10004C70.5 6.10004 70.5 1 75.2 1C79.9 1 79.9 6.10004 84.6 6.10004"
            stroke="white"
            strokeMiterlimit="10"
          />
          <path
            d="M0 18.1001C4.7 18.1001 4.70002 23.2001 9.40002 23.2001C14.1 23.2001 14.1 18.1001 18.8 18.1001C23.5 18.1001 23.5 23.2001 28.2 23.2001C32.9 23.2001 32.9 18.1001 37.6 18.1001C42.3 18.1001 42.3 23.2001 47 23.2001C51.7 23.2001 51.7 18.1001 56.4 18.1001C61.1 18.1001 61.1 23.2001 65.8 23.2001C70.5 23.2001 70.5 18.1001 75.2 18.1001C79.9 18.1001 79.9 23.2001 84.6 23.2001"
            stroke="white"
            strokeMiterlimit="10"
          />
          <path
            d="M0 35.2002C4.7 35.2002 4.70002 40.3002 9.40002 40.3002C14.1 40.3002 14.1 35.2002 18.8 35.2002C23.5 35.2002 23.5 40.3002 28.2 40.3002C32.9 40.3002 32.9 35.2002 37.6 35.2002C42.3 35.2002 42.3 40.3002 47 40.3002C51.7 40.3002 51.7 35.2002 56.4 35.2002C61.1 35.2002 61.1 40.3002 65.8 40.3002C70.5 40.3002 70.5 35.2002 75.2 35.2002C79.9 35.2002 79.9 40.3002 84.6 40.3002"
            stroke="white"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
      <div className={styles.hero__heading}>
        <Breadcrumb pathname={''} />
        <Heading level="1" weight="800" id={id} className={styles.hero__title}>
          {title}
        </Heading>
      </div>
      <div className={styles.hero__infoContainer}>
        <div className={styles.hero__info}>
          <Text className={styles.hero__author} weight="700" color="gunmetal">
            Escrito por {author}
          </Text>
          <svg
            width="1"
            height="40"
            viewBox="0 0 1 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0.5"
              y1="40"
              x2="0.5"
              y2="-1.43051e-06"
              stroke="#8C4949"
            />
          </svg>

          <Text color="gunmetal" align="right" className={styles.hero__date}>
            {date}
          </Text>
        </div>
        <SocialIcons backgroundColor="black" />
      </div>
    </section>
  )
}
