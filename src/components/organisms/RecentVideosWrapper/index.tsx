'use client'

import { v4 as uuidv4 } from 'uuid'
import { IconArrowRight } from '@tabler/icons-react'
import { LocalIcon } from '@/ions/LocalIcon'
import { Heading } from '@/atoms/Heading'
import { Button } from '@/atoms/Button'
import { Text } from '@/atoms/Text'
import { CardVideo, CardProps } from '@/molecules/CardVideo'
import styles from './styles.module.scss'

interface RecentVideosWrapperProps {
  title?: string
  text?: string
  videos: CardProps[]
  maxResults?: number
}

export const RecentVideosWrapper = ({
  videos,
  title,
  text,
  maxResults = 5,
}: RecentVideosWrapperProps) => {
  const id = uuidv4()

  return (
    <section aria-labelledby={id} className={styles.recentVideos}>
      <div className={styles.recentVideos__container}>
        <div className={styles.recentVideos__heading}>
          <Heading color="white" level="2" weight="700" id={id}>
            {title}
          </Heading>
          <Text color="white">{text}</Text>
        </div>
        <div className={styles.recentVideos__cards}>
          {videos.length > 0 &&
            videos
              .slice(0, maxResults)
              .map((video: CardProps, index: number) => (
                <CardVideo
                  key={video.title}
                  image={video.image}
                  tag={video.tag}
                  title={video.title}
                  link={video.link}
                  className={index === 0 ? styles.firstCard : undefined}
                />
              ))}
          <LocalIcon
            icon="arrows"
            width={101}
            height={14}
            fill="white"
            className={styles.recentVideos__svg}
          />
        </div>
        <Button
          hasIcon={true}
          icon={IconArrowRight}
          iconColor="#FFFFFF"
          iconSize={24}
          secondaryColor="#FFF"
          label="Acesse o canal"
          href="https://youtube.com/@arabiebezrihermont"
          target="_blank"
          isButton={false}
          useButtonStyle
          variant="secondary"
          className={styles.recentVideos__button}
        />
      </div>
    </section>
  )
}
