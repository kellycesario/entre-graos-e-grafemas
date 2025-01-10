'use client'

import { usePathname } from 'next/navigation'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import { CardCTA } from '@/molecules/CardCTA'
import styles from './styles.module.scss'

export interface ProjectItem {
  projectName?: string
  link?: string
  image?: string
}

export interface MoreProjectsProps {
  projectItems?: ProjectItem[]
  title?: string
  text?: string
  cta?: string
}

export const MoreProjects = ({
  projectItems,
  title,
  text,
  cta,
}: MoreProjectsProps) => {
  const pathname = usePathname()

  return (
    <section aria-labelledby="Demais projetos" className={styles.projects}>
      <Heading level="2" color="cordovan" weight="700" id="Demais projetos">
        {title}
      </Heading>
      <Text>{text}</Text>

      <div className={styles.projects__container}>
        {projectItems!
          .filter(({ link }) => link !== pathname)
          .map(({ image, projectName, link }) => (
            <CardCTA
              image={image}
              projectName={projectName}
              link={link}
              key={projectName}
              cta={cta}
            />
          ))}
      </div>
    </section>
  )
}
