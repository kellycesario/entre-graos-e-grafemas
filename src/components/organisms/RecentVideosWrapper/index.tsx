'use client'
import useSWR from 'swr'
import axios from 'axios'
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
  maxResults?: number
}

const fetchVideos = async (maxResults: number) => {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANNEL_ID
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelId}&order=date&part=snippet&type=video&maxResults=${maxResults}`

  const response = await axios.get(apiUrl)
  return response.data.items.map((item: any) => ({
    image: item.snippet.thumbnails.high.url,
    title: item.snippet.title,
    tag: 'Novo vídeo',
    link: `https://www.youtube.com/watch?v=${item.id.videoId}`,
  }))
}

export const RecentVideosWrapper = ({
  title,
  text,
  maxResults = 5,
}: RecentVideosWrapperProps) => {
  const id = uuidv4()

  const { data: videos, error } = useSWR(
    `youtube-videos-${maxResults}`,
    () => fetchVideos(maxResults),
    {
      revalidateOnFocus: false,
      refreshInterval: 43200000,
      dedupingInterval: 60000,
    }
  )

  if (error) return null
  if (!videos) return null

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
            videos.map((video: CardProps, index: number) => (
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
