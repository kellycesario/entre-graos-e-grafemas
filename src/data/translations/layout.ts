import { HeroProps } from '@/organisms/Hero'

export const navigation: Record<
  'pt-BR' | 'en-US',
  { item: string; href: string }[]
> = {
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
