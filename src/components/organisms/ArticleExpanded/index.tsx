import { RichText } from '@/organisms/RichText'

interface ArticleExpandedProps {
  content: any
  imagesV1: any[]
  imagesV2: any[]
  hasImagesV1: boolean
  hasImagesV2: boolean
  locale?: 'pt-BR' | 'en-US'
}

export const ArticleExpanded = ({
  content,
  imagesV1,
  imagesV2,
  hasImagesV1,
  hasImagesV2,
  locale,
}: ArticleExpandedProps) => {
  return (
    <RichText
      content={content}
      imagesV1={imagesV1}
      imagesV2={imagesV2}
      hasImagesV1={hasImagesV1}
      hasImagesV2={hasImagesV2}
      locale={locale}
    />
  )
}
