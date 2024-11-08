'use client'

import { v4 as uuidv4 } from 'uuid'
import { Heading } from '@/atoms/Heading'
import { AccordionItem } from '@/molecules/AccordionItem'
import accordionData from '@/data/accordion.json'
import styles from './styles.module.scss'

interface AccordionProps {
  title?: string
}

export const Accordion = ({ title }: AccordionProps) => {
  const id = uuidv4()

  return (
    <section aria-labelledby={id} className={styles.accordion}>
      <Heading level="2" weight="700" id={id} color="cordovan">
        {title}
      </Heading>

      <div className={styles.accordion__wrapper}>
        {accordionData.map(({ question, answer }, index) => {
          const number = (index + 1).toString().padStart(2, '0')

          return (
            <AccordionItem
              key={question}
              question={question}
              answer={answer}
              number={number}
            />
          )
        })}
      </div>
    </section>
  )
}
