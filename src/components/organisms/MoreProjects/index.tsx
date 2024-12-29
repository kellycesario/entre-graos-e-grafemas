'use client'

import { usePathname } from 'next/navigation'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import { CardCTA } from '@/molecules/CardCTA'
import projects from '@/data/projects.json'
import styles from './styles.module.scss'

export const MoreProjects = () => {
  const pathname = usePathname()

  return (
    <section aria-labelledby="Demais projetos" className={styles.projects}>
      <Heading level="2" color="cordovan" weight="700" id="Demais projetos">
        Entre um gole e outro
      </Heading>
      <Text>
        Enquanto você toma um café, continue a jornada pelos demais tópicos do
        site
      </Text>

      <div className={styles.projects__container}>
        {projects
          .filter(({ link }) => link !== pathname)
          .map(({ image, projectName, link }) => (
            <CardCTA
              image={image}
              projectName={projectName}
              link={link}
              key={projectName}
            />
          ))}
      </div>
    </section>
  )
}
