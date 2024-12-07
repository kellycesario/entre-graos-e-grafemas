import { Text } from '@/atoms/Text'
import { IconMug } from '@tabler/icons-react'
import styles from './styles.module.scss'

type CuriosityItemProps = {
  subtopic: string
  topic: string
}

export const CuriosityItem = ({ subtopic, topic }: CuriosityItemProps) => {
  return (
    <div className={styles.curiosityItem}>
      <div className={styles.curiosityItem__container}>
        <IconMug color="#e02238" />
        <Text weight="600" color="cordovan">
          {topic}
        </Text>
      </div>
      <Text weight="400">{subtopic}</Text>
    </div>
  )
}
