import { RichText } from '@/atoms/RichText'
import styles from './styles.module.scss'

interface ArticleExpandedProps {
  content: any
  imagesV1: any[]
  imagesV2: any[]
  hasImagesV1: boolean
  hasImagesV2: boolean
}

export const ArticleExpanded = ({
  content,
  imagesV1,
  imagesV2,
  hasImagesV1,
  hasImagesV2,
}: ArticleExpandedProps) => {
  return (
    <section className={styles.articleExpanded}>
      <RichText
        content={content}
        imagesV1={imagesV1}
        imagesV2={imagesV2}
        hasImagesV1={hasImagesV1}
        hasImagesV2={hasImagesV2}
      />
    </section>
  )
}
