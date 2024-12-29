'use client'

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

  return (
    <section aria-labelledby='Frequently asked questions' className={styles.accordion}>
      <Heading level="2" weight="700" id='Frequently asked questions' color="cordovan">
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
