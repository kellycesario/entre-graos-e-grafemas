'use client'

import { Heading } from '@/atoms/Heading'
import { CuriosityItem, CuriosityItemProps } from '@/molecules/CuriosityItem'
import styles from './styles.module.scss'

interface CuriositiesProps {
  curiosities: CuriosityItemProps[]
}

export const Curiosities = ({ curiosities }: CuriositiesProps) => {
  return (
    <section className={styles.curiosities}>
      <article className={styles.curiosities__headings}>
        <Heading color="cordovan" weight="700" level="2">
          Algumas curiosidades sobre mim
        </Heading>
      </article>
      <article className={styles.curiosities__container}>
        {curiosities.map((curiosity: CuriosityItemProps) => (
          <CuriosityItem
            key={curiosity.topic}
            topic={curiosity.topic}
            content={curiosity.content}
          />
        ))}
      </article>
    </section>
  )
}
