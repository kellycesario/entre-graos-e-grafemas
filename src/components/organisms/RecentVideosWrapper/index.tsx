'use client'

import { IconArrowRight } from '@tabler/icons-react'
import { LocalIcon } from '@/ions/LocalIcon'
import { Heading } from '@/atoms/Heading'
import { Button } from '@/atoms/Button'
import { Text } from '@/atoms/Text'
import { CardVideo, CardProps } from '@/molecules/CardVideo'
import styles from './styles.module.scss'

export interface RecentVideosWrapperProps {
  title?: string
  text?: string
  videos?: CardProps[]
  maxResults?: number
  buttonLabel?: string
}

export const RecentVideosWrapper = ({
  videos,
  title,
  text,
  maxResults = 5,
  buttonLabel
}: RecentVideosWrapperProps) => {
  return (
    <section aria-labelledby="videos" className={styles.recentVideos}>
      <div className={styles.recentVideos__container}>
        <div className={styles.recentVideos__heading}>
          <Heading color="white" level="2" weight="700" id="videos">
            {title}
          </Heading>
          <Text color="white">{text}</Text>
        </div>
        <div className={styles.recentVideos__cards}>
          {videos && videos.length > 0 ? (
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
              ))
          ) : (
            <Text color="white">No videos available</Text>
          )}
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
          label={buttonLabel}
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
