import { PresentationProps } from '@/organisms/Presentation'
import { CardArticleWrapperProps } from '@/organisms/CardArticleWrapper'

export const presentationTranslations: Record<
  'pt-BR' | 'en-US',
  PresentationProps
> = {
  'pt-BR': {
    title: 'Pesquisas',
    text: 'Embarque no estudo aprofundado da sintaxe, morfologia, léxico, fonologia e outros campos da Linguística, explorando a organização das sentenças e formação de palavras, além da articulação dos sons da fala e da lingua, sua percepção e o impacto dessas estruturas nas várias modalidades de interação. Esses estudos são relacionados à cognicao e/ou à área de ensino. Além disso, há vários trabalhos relacionados à alfabetização em condições típicas e atípicas. Ao entender como essas disciplinas se inter-relacionam, é possível compreender como a linguagem é organizada mentalmente, influenciando o entendimento e a interação social.',
    alt: '',
  },
  'en-US': {
    title: 'Research',
    text: 'Dive into the in-depth study of syntax, morphology, lexicon, phonology, and other fields of Linguistics, exploring sentence structure and word formation, as well as the articulation of speech sounds and language, their perception, and the impact of these structures in various modes of interaction. These studies are related to cognition and/or the field of education. Additionally, there are numerous works related to literacy in typical and atypical conditions. By understanding how these disciplines interrelate, it is possible to comprehend how language is mentally organized, influencing understanding and social interaction.',
    alt: '',
  },
}

export const cardArticleTranslations: Record<
  'pt-BR' | 'en-US',
  CardArticleWrapperProps
> = {
  'pt-BR': {
    title: 'Entre palavras e pensamentos',
    text: 'Confira nossas pílulas sobre fonética, morfologia e muito mais',
    ariaLabel: 'Buscar artigo',
    placeholder: 'Cognição',
    buttonLabel: 'Buscar',
    clearButtonLabel: 'Limpar',
  },
  'en-US': {
    title: 'Between words and thoughts',
    text: 'Check out our insights on phonetics, morphology, and much more',
    ariaLabel: 'Search article',
    placeholder: 'Cognition',
    buttonLabel: 'Search',
    clearButtonLabel: 'Clear',
  },
}
