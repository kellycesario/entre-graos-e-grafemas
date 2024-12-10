import { v4 as uuidv4 } from 'uuid'
import { IconArrowRight } from '@tabler/icons-react'
import { LocalIcon } from '@/ions/LocalIcon'
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
          {recentVideosMock.slice(0, 2).map(({ image, title, tag, link }) => (
            <CardVideo
              key={title}
              image={image}
              tag={tag}
              title={title}
              link={link}
            />
          ))}
          <LocalIcon
            icon="arrows"
            width={101}
            height={14}
            fill='white'
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
          variant="secondary"
        />
      </div>
    </section>
  )
}
