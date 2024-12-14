import { Text } from '@/atoms/Text'
import { RichText } from '@/atoms/RichText'
import { IconMug } from '@tabler/icons-react'
import styles from './styles.module.scss'

export interface CuriosityItemProps {
  topic?: string
  content?: string
}

export const CuriosityItem = ({ topic, content }: CuriosityItemProps) => {
  return (
    <div className={styles.curiosityItem}>
      <div className={styles.curiosityItem__container}>
        <IconMug color="#e02238" />
        {topic && (
          <Text weight="600" color="cordovan">
            {topic}
          </Text>
        )}
      </div>
      <RichText content={content} />
    </div>
  )
}
