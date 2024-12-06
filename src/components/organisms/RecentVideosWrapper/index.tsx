import { v4 as uuidv4 } from 'uuid'
import { IconArrowRight } from '@tabler/icons-react'
import { Heading } from '@/atoms/Heading'
import { Button } from '@/atoms/Button'
import { Text } from '@/atoms/Text'
import { CardVideo } from '@/molecules/CardVideo'
import recentVideosMock from '@/data/recentVideosMock.json'
import styles from './styles.module.scss'

interface RecentVideosWrapperProps {
  title?: string
  text?: string
}

export const RecentVideosWrapper = ({
  title,
  text,
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
          {recentVideosMock
            .slice(0, 2)
            .map(({ image, title, tag, link }) => (
              <CardVideo
                key={title}
                image={image}
                tag={tag}
                title={title}
                link={link}
              />
            ))}
          <svg
            width="101"
            height="14"
            viewBox="0 0 101 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.recentVideos__svg}
          >
            <path
              d="M93.3002 7.21806L97.3002 4.03658L101.2 0.954553V7.21806V13.4816L97.3002 10.3001L93.3002 7.21806Z"
              fill="white"
            />
            <path
              d="M70.0004 7.21806L74.0004 4.03658L77.9004 0.954553V7.21806V13.4816L74.0004 10.3001L70.0004 7.21806Z"
              fill="white"
            />
            <path
              d="M46.6996 7.21806L50.5996 4.03658L54.5996 0.954553V7.21806V13.4816L50.5996 10.3001L46.6996 7.21806Z"
              fill="white"
            />
            <path
              d="M23.3998 7.21806L27.2998 4.03658L31.2998 0.954553V7.21806V13.4816L27.2998 10.3001L23.3998 7.21806Z"
              fill="white"
            />
            <path
              d="M0 7.21806L4 4.03658L8 0.954553L8 7.21806V13.4816L4 10.3001L0 7.21806Z"
              fill="white"
            />
          </svg>
        </div>
        <Button
          hasIcon={true}
          icon={IconArrowRight}
          iconColor="#FFFFFF"
          iconSize={24}
          secondaryColor="#FFF"
          label="Acesse o canal"
          variant="secondary"
        />
      </div>
    </section>
  )
}
