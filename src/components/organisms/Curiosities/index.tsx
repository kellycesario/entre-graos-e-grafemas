'use client'

import { Heading } from '@/atoms/Heading'
import { CuriosityItem } from '@/molecules/CuriosityItem'
import curiosities from '@/data/curiosities.json'
import styles from './styles.module.scss'

export const Curiosities = () => {
  return (
    <section className={styles.curiosities}>
      <article className={styles.curiosities__headings}>
        <Heading color="cordovan" weight="700" level="2">
          Algumas curiosidades sobre mim
        </Heading>
      </article>
      <article className={styles.curiosities__container}>
        {curiosities.map((item) => (
          <CuriosityItem
            key={item.topic}
            topic={item.topic}
            subtopic={item.subtopic}
          />
        ))}
      </article>
    </section>
  )
}
