import { HeroProps } from '@/organisms/Hero'
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
    { item: 'Research', href: '/pesquisas' },
    { item: 'Partnerships', href: '/parcerias' },
    { item: 'About me', href: '/sobre-mim' },
    { item: 'Contact', href: '/contato' },
  ],
}

export const heroTranslations: Record<'pt-BR' | 'en-US', HeroProps> = {
  'pt-BR': {
    title: 'Entre grãos e grafemas',
    text: 'Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café',
    firstButtonLabel: 'Meu canal no YouTube',
    secondButtonLabel: 'Entre em contato',
  },
  'en-US': {
    title: 'Between the brew and the word',
    text: 'Join me through the interfaces of linguistics and savor each of its branches with a coffee',
    firstButtonLabel: 'My YouTube channel',
    secondButtonLabel: 'Get in Touch',
  },
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
      link: '/pesquisas',
      image: '/images/research/2.webp',
    },
    {
      projectName: 'A little bit more about me',
      link: '/sobre-mim',
      image: '/images/about/1.webp',
    },
    {
      projectName: 'Partnerships',
      link: '/parcerias',
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
