import { HeroProps } from '@/organisms/Hero'
import { PartnersWrapperProps } from '@/organisms/PartnersWrapper'

export const heroTranslations: Record<'pt-BR' | 'en-US', HeroProps> = {
  'pt-BR': {
    title: 'Entre grãos e grafemas: parcerias',
    text: 'No eLinC, no projeto Alegria e em demais pesquisas, as parcerias são o motor da transformação',
    firstButtonLabel: 'Meu canal no YouTube',
    secondButtonLabel: 'Entre em contato',
  },
  'en-US': {
    title: 'Between the brew and words: partnerships',
    text: 'In eLinC, the Alegria project, and other research, partnerships are the driving force of transformation',
    firstButtonLabel: 'My YouTube channel',
    secondButtonLabel: 'Get in Touch',
  },
}

export const partnersTranslations: Record<
  'pt-BR' | 'en-US',
  PartnersWrapperProps
> = {
  'pt-BR': {
    title: 'Parcerias que transformam',
    text: 'A vida é mais rica quando dividimos uma xícara de café - porque compartilhar é o melhor ingrediente para nossos sucessos!',
  },
  'en-US': {
    title: 'Partnerships that transform',
    text: 'Life is richer when we share a cup of coffee - because sharing is the best ingredient for our success!',
  },
}

export const partnersCategories: Record<
  'pt-BR' | 'en-US',
  Record<string, string>
> = {
  'pt-BR': {
    Colegas: 'Colegas',
    Empresas: 'Empresas',
    'Ex-orientandos': 'Ex-orientandos',
    'Grupos de pesquisa': 'Grupos de pesquisa',
    'Organizações não Governamentais': 'Organizações não Governamentais',
    Orientandos: 'Orientandos',
    Universidades: 'Universidades',
  },
  'en-US': {
    Colegas: 'Colleagues',
    Empresas: 'Companies',
    'Ex-orientandos': 'Ex-students',
    'Grupos de pesquisa': 'Research Groups',
    'Organizações não Governamentais': 'Non-Governmental Organizations',
    Orientandos: 'Students',
    Universidades: 'Universities',
  },
}
