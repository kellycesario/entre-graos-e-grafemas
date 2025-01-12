import { PartnersWrapperProps } from '@/organisms/PartnersWrapper'

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
    text: 'Life is richer when we share a cup of coffee – because sharing is the best ingredient for our success!',
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
