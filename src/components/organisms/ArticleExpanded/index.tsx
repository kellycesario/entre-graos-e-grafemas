import { RichText } from '@/atoms/RichText'

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
    <RichText
      content={content}
      imagesV1={imagesV1}
      imagesV2={imagesV2}
      hasImagesV1={hasImagesV1}
      hasImagesV2={hasImagesV2}
    />
  )
}
