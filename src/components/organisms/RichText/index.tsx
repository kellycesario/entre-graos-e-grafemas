import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { GalleryV1 } from '@/organisms/GalleryV1'
import { GalleryV2 } from '@/organisms/GalleryV2'
import styles from './styles.module.scss'

interface RichTextProps {
  content: any
  className?: string
  imagesV1: any[]
  imagesV2: any[]
  hasImagesV1?: boolean
  hasImagesV2?: boolean
  locale?: 'pt-BR' | 'en-US'
}

export const RichText = ({
  content,
  className,
  imagesV1,
  imagesV2,
  hasImagesV1,
  hasImagesV2,
  locale,
}: RichTextProps) => {
  const richTextStyle = [styles.richText, className].join(' ')

  return (
    <div className={richTextStyle}>
      <div className={styles.richText__text}>
        {documentToReactComponents(content.json)}
      </div>

      {hasImagesV1 && (
        <GalleryV1 images={imagesV1} hasImages={hasImagesV1} locale={locale} />
      )}
      {hasImagesV2 && (
        <GalleryV2 images={imagesV2} hasImages={hasImagesV2} locale={locale} />
      )}
    </div>
  )
}
