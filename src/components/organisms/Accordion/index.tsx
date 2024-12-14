'use client'

import { v4 as uuidv4 } from 'uuid'
import { Heading } from '@/atoms/Heading'
import { AccordionItem, AccordionItemProps } from '@/molecules/AccordionItem'
import styles from './styles.module.scss'

interface AccordionProps {
  frequentlyAskedQuestions: AccordionItemProps[]
  title?: string
}

export const Accordion = ({
  title,
  frequentlyAskedQuestions = [],
}: AccordionProps) => {
  const id = uuidv4()

  return (
    <section aria-labelledby={id} className={styles.accordion}>
      <Heading level="2" weight="700" id={id} color="cordovan">
        {title}
      </Heading>

      <div className={styles.accordion__wrapper}>
        {frequentlyAskedQuestions.map(
          (accordion: AccordionItemProps, index) => {
            const number = (index + 1).toString().padStart(2, '0')
            return (
              <AccordionItem
                key={accordion.question}
                question={accordion.question}
                answer={accordion.answer}
                number={number}
              />
            )
          }
        )}
      </div>
    </section>
  )
}
