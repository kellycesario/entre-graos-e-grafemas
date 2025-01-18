import { NavigationItem } from '@/organisms/Footer'
import { ProjectItem, MoreProjectsProps } from '@/organisms/MoreProjects'

export const navigation: Record<'pt-BR' | 'en-US', NavigationItem[]> = {
  'pt-BR': [
    { item: 'Início', href: '/' },
    { item: 'eLinC', href: '/elinc' },
    { item: 'Alegria', href: '/alegria' },
    { item: 'Pesquisas', href: '/pesquisas' },
    { item: 'Parcerias', href: '/parcerias' },
    { item: 'Sobre mim', href: '/sobre-mim' },
    { item: 'Entre em contato', href: '/contato' },
  ],
  'en-US': [
    { item: 'Home', href: '/' },
    { item: 'eLinC', href: '/elinc' },
    { item: 'Alegria', href: '/alegria' },
    { item: 'Research', href: '/research' },
    { item: 'Partnerships', href: '/partnerships' },
    { item: 'About me', href: '/about-me' },
    { item: 'Get in Touch', href: '/contact-me' },
  ],
}

export const projectsListTranslations: Record<
  'pt-BR' | 'en-US',
  ProjectItem[]
> = {
  'pt-BR': [
    { projectName: 'eLinC', link: '/elinc', image: '/images/elinc/1.png' },
    {
      projectName: 'Alegria',
      link: '/alegria',
      image: '/images/alegria/1.jpg',
    },
    {
      projectName: 'Minhas demais pesquisas',
      link: '/pesquisas',
      image: '/images/research/2.webp',
    },
    {
      projectName: 'Um pouco mais sobre mim',
      link: '/sobre-mim',
      image: '/images/about/1.webp',
    },
    {
      projectName: 'Minhas parcerias',
      link: '/parcerias',
      image: '/images/partnership/1.webp',
    },
  ],
  'en-US': [
    { projectName: 'eLinC', link: '/elinc', image: '/images/elinc/1.png' },
    {
      projectName: 'Alegria',
      link: '/alegria',
      image: '/images/alegria/1.jpg',
    },
    {
      projectName: 'My research',
      link: '/research',
      image: '/images/research/2.webp',
    },
    {
      projectName: 'A little bit more about me',
      link: '/about-me',
      image: '/images/about/1.webp',
    },
    {
      projectName: 'Partnerships',
      link: '/partnerships',
      image: '/images/partnership/1.webp',
    },
  ],
}

export const moreProjectsTranslations: Record<
  'pt-BR' | 'en-US',
  MoreProjectsProps
> = {
  'pt-BR': {
    title: 'Entre um gole e outro',
    text: 'Enquanto você toma um café, continue a jornada pelos demais tópicos do site',
    cta: 'Conheça também',
  },
  'en-US': {
    title: 'Between one sip and another',
    text: 'While you enjoy your coffee, continue your journey through the other sections of the site',
    cta: 'Discover more',
  },
}

export const metadataTranslations: Record<
  'pt-BR' | 'en-US',
  Record<string, string>
> = {
  'pt-BR': {
    title: 'Entre grãos e grafemas por Arabie Bezri Hermont',
    description:
      'Um blog, escrito por Arabie Bezri Hermont, dedicado ao estudo da Linguística, com artigos e reflexões sobre aquisição de linguagem, sintaxe, fonética, fonologia e outros temas essenciais para entender os fenômenos da linguagem humana.',
  },
  'en-US': {
    title: 'Between the brew and words by Arabie Bezri Hermont',
    description:
      'A blog written by Arabie Bezri Hermont, dedicated to the study of Linguistics, with articles and reflections on language acquisition, syntax, phonetics, phonology, and other essential topics to understand human language phenomena.',
  },
}
