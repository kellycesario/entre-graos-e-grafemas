import { useState } from 'react'
import { IconPlus, IconX } from '@tabler/icons-react'
import { RichText } from '@/atoms/RichText'
import styles from './styles.module.scss'

export interface AccordionItemProps {
  question?: string
  answer?: string
  number?: string | number
}

export const AccordionItem = ({
  question,
  answer,
  number,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <details className={styles.accordion} onToggle={handleToggle}>
      <summary className={styles.accordion__summary}>
        <p className={styles.accordion__number}>{number}</p>
        <div className={styles.accordion__heading}>
          <p className={styles.accordion__question}>{question}</p>

          {isOpen ? (
            <IconX size={16} color="#5C6B6B" />
          ) : (
            <IconPlus size={16} color="#FF6B6B" />
          )}
        </div>
      </summary>
      <RichText
        content={answer}
        className={styles.accordion__answer}
        imagesV1={[]}
        imagesV2={[]}
      />
    </details>
  )
}
