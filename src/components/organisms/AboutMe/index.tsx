'use client'
import Image from 'next/image'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import styles from './styles.module.scss'

export const AboutMe = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__imageContainer}>
        <Image
          src="/images/about/Arabie.png"
          alt=""
          width={450}
          height={450}
          className={styles.about__image}
        />
      </div>
      <div className={styles.about__content}>
        <Heading level="2" color="cordovan" weight="700">
          Sobre mim
        </Heading>
        <Text>
          Sou professora do Programa de Pós-Graduação em Letras e do curso de
          Graduação em Letras e Pedagogia da Pontifícia Universidade Católica de
          Minas Gerais (PUC Minas). Tenho a alegria de fazer parte do
          Departamento de Letras, onde compartilho meus conhecimentos e paixão
          pela linguagem com alunos de diversas formações. Além disso, ministro
          disciplinas de graduação e pós-graduação (tanto lato quanto strictu
          sensu), sempre com o objetivo de incentivar a reflexão crítica e o
          desenvolvimento do pensamento linguístico.
        </Text>
      </div>
    </section>
  )
}
