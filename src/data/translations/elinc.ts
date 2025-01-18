import { HeroProps } from '@/organisms/Hero'
import { PresentationProps } from '@/organisms/Presentation'
import { CardArticleWrapperProps } from '@/organisms/CardArticleWrapper'

export const heroTranslations: Record<'pt-BR' | 'en-US', HeroProps> = {
  'pt-BR': {
    title: 'Entre grãos e grafemas: conheça o eLinC',
    text: 'Embarque comigo e com o Grupo de Estudos em Linguagem e Cognição pelas várias interfaces da linguística e saboreie cada ramificação com um café',
    firstButtonLabel: 'Meu canal no YouTube',
    secondButtonLabel: 'Entre em contato',
  },
  'en-US': {
    title: 'Between the brew and words: meet the eLinC project',
    text: 'Join me and the Language and Cognition Study Group as we navigate through the various interfaces of linguistics and savor every branch with a coffee',
    firstButtonLabel: 'My YouTube channel',
    secondButtonLabel: 'Get in Touch',
  },
}

export const presentationTranslations: Record<
  'pt-BR' | 'en-US',
  PresentationProps
> = {
  'pt-BR': {
    title: 'eLinC',
    text: 'O Grupo de Estudos em Linguagem e Cognição explora, de maneira colaborativa, construtos teóricos oriundos de diferentes abordagens da Linguística, como a Gramática Gerativa e a Linguística Cognitiva. O objetivo é promover uma compreensão aprofundada dos processos envolvidos na aquisição, produção, compreensão e interpretação da linguagem na modalidade oral ou escrita, investigando como as estruturas cognitivas influenciam e são influenciadas pela linguagem em suas diversas manifestações.',
    alt: '',
  },
  'en-US': {
    title: 'eLinC',
    text: 'The Language and Cognition Study Group explores, in a collaborative manner, theoretical constructs from different approaches to Linguistics, such as Generative Grammar and Cognitive Linguistics. The goal is to promote a deep understanding of the processes involved in the acquisition, production, comprehension, and interpretation of language in both oral and written forms, investigating how cognitive structures influence and are influenced by language in its various manifestations.',
    alt: '',
  },
}

export const cardArticleTranslations: Record<
  'pt-BR' | 'en-US',
  CardArticleWrapperProps
> = {
  'pt-BR': {
    title: 'Entre palavras e pensamentos',
    text: 'Confira nossas pílulas sobre linguagem e cognição humana',
    ariaLabel: 'Buscar artigo',
    placeholder: 'Cognição',
    buttonLabel: 'Buscar',
    clearButtonLabel: 'Limpar',
  },
  'en-US': {
    title: 'Between words and thoughts',
    text: 'Check out our insights on language and human cognition',
    ariaLabel: 'Search article',
    placeholder: 'Cognition',
    buttonLabel: 'Search',
    clearButtonLabel: 'Clear',
  },
}
