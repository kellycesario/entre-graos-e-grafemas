import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './styles.module.scss'

interface RichTextProps {
  content: any
  className?: string
}
export const RichText = ({ content, className }: RichTextProps) => {
  const richTextStyle = [styles.richText, className].join(' ')
  return (
    <div className={richTextStyle}>
      {documentToReactComponents(content.json)}
    </div>
  )
}
