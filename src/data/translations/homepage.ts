import { IconPencil, IconHeartHandshake } from '@tabler/icons-react'
import { ProjectsCTAProps } from '@/organisms/ProjectsCTA'
import { CardProps } from '@/molecules/CardBanner'
import { RecentVideosWrapperProps } from '@/organisms/RecentVideosWrapper'

export const recentVideosWrapperTranslations: Record<
  'pt-BR' | 'en-US',
  RecentVideosWrapperProps
> = {
  'pt-BR': {
    title: 'Fique por dentro:',
    text: 'Acompanhe o conteúdo mais recente postado em nosso canal do YouTube',
  },
  'en-US': {
    title: 'Stay Updated:',
    text: 'Follow the latest content posted on our YouTube channel',
  },
}

export const elincTranslations: Record<'pt-BR' | 'en-US', ProjectsCTAProps> = {
  'pt-BR': {
    title: 'Conheça o projeto eLinC',
    text: 'Mergulhe em uma jornada fascinante pelo universo da Linguística, onde teoria e prática se encontram para explorar a Gramática Gerativa e a Linguística Cognitiva de forma colaborativa e inovadora',
    firstButtonLabel: 'Mais sobre o eLinC',
    secondButtonLabel: 'Visite o site oficial',
  },
  'en-US': {
    title: 'Learn about the eLinC project',
    text: 'Dive into a fascinating journey through the universe of Linguistics, where theory and practice meet to explore Generative Grammar and Cognitive Linguistics in a collaborative and innovative way',
    firstButtonLabel: 'More about eLinC',
    secondButtonLabel: 'Visit the official website',
  },
}

export const alegriaTranslations: Record<'pt-BR' | 'en-US', ProjectsCTAProps> =
  {
    'pt-BR': {
      title: 'Conheça o projeto Alegria',
      text: 'O projeto Alegria promove a alfabetização e o letramento de adultos que enfrentam dificuldades de aprendizado, com o objetivo de transformar a vida de quem busca superar desafios educacionais.',
      firstButtonLabel: 'Mais sobre o Alegria',
      secondButtonLabel: 'Alegria no PROEX da PUC Minas',
    },
    'en-US': {
      title: 'Learn about the Alegria project',
      text: 'The Alegria project promotes literacy and education for adults facing learning difficulties, with the goal of transforming the lives of those who seek to overcome educational challenges.',
      firstButtonLabel: 'More about Alegria',
      secondButtonLabel: 'Alegria on PROEX at PUC Minas',
    },
  }

export const pesquisasTranslations: Record<
  'pt-BR' | 'en-US',
  ProjectsCTAProps
> = {
  'pt-BR': {
    title: 'Conheça mais pesquisas',
    text: 'Explore estudos profundos sobre sintaxe, fonologia, léxico, morfologia e aquisição da linguagem. Mergulhe em pesquisas que avançam no entendimento da linguagem humana.',
    firstButtonLabel: 'Mais sobre minhas pesquisas',
  },
  'en-US': {
    title: 'Explore more research',
    text: 'Delve into deep studies on syntax, phonology, lexicon, morphology, and language acquisition. Dive into research that advances our understanding of human language.',
    firstButtonLabel: 'More about my research',
  },
}

export const cardBannerTranslations: Record<'pt-BR' | 'en-US', CardProps[]> = {
  'pt-BR': [
    {
      icon: IconPencil,
      link: '/sobre-mim',
      title: 'Quer saber mais sobre mim?',
      titleColor: 'white',
      label: 'Sobre mim',
      secondaryColor: 'white',
      backgroundColor: 'gunmetal',
      iconColor: 'white',
    },
    {
      icon: IconHeartHandshake,
      link: '/parcerias',
      title: 'Quer saber mais sobre minhas parcerias?',
      titleColor: 'dim-gray',
      label: 'Parcerias',
      secondaryColor: '#5C6B6B',
      backgroundColor: 'white',
      iconColor: '#5C6B6B',
    },
  ],
  'en-US': [
    {
      icon: IconPencil,
      link: '/about-me',
      title: 'Want to know more about me?',
      titleColor: 'white',
      label: 'About Me',
      secondaryColor: 'white',
      backgroundColor: 'gunmetal',
      iconColor: 'white',
    },
    {
      icon: IconHeartHandshake,
      link: '/partnerships',
      title: 'Want to know more about my partnerships?',
      titleColor: 'dim-gray',
      label: 'Partnerships',
      secondaryColor: '#5C6B6B',
      backgroundColor: 'white',
      iconColor: '#5C6B6B',
    },
  ],
}
