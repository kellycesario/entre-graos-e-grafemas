import { IconMug } from '@tabler/icons-react'
import { Text } from '@/atoms/Text'
import { RichText } from '@/organisms/RichText'
import styles from './styles.module.scss'

export interface CuriosityItemProps {
  topic?: string
  description?: string
  locale?: 'pt-BR' | 'en-US'
}

export const CuriosityItem = ({
  topic,
  description,
  locale,
}: CuriosityItemProps) => {
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
      <RichText
        content={description}
        imagesV1={[]}
        imagesV2={[]}
        locale={locale}
      />
    </div>
  )
}
