import { useState } from 'react'
import { IconPlus, IconX } from '@tabler/icons-react'
import styles from './styles.module.scss'

interface AccordionItemProps {
  title?: string
  description?: string
  number?: string
}

export const AccordionItem = ({
  title,
  description,
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
          <p className={styles.accordion__title}>{title}</p>

          {isOpen ? (
            <IconX size={16} color="#5C6B6B" />
          ) : (
            <IconPlus size={16} color="#FF6B6B" />
          )}
        </div>
      </summary>
      <p className={styles.accordion__description}>{description}</p>
    </details>
  )
}
