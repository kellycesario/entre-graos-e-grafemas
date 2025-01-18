import { HeroProps } from '@/organisms/Hero'
import { PresentationProps } from '@/organisms/Presentation'
import { CardArticleWrapperProps } from '@/organisms/CardArticleWrapper'

export const heroTranslations: Record<'pt-BR' | 'en-US', HeroProps> = {
  'pt-BR': {
    title: 'Entre grãos e grafemas: conheça o Alegria',
    text: 'Aproveite um café e descubra o Alegria, um projeto que promove leitura, escrita, respeito, inclusão e autonomia',
    firstButtonLabel: 'Meu canal no YouTube',
    secondButtonLabel: 'Entre em contato',
  },
  'en-US': {
    title: 'Between the brew and words: meet the Alegria project',
    text: 'Enjoy a coffee and discover Alegria, a project that fosters literacy, respect, inclusion, and autonomy',
    firstButtonLabel: 'My YouTube channel',
    secondButtonLabel: 'Get in Touch',
  },
}

export const presentationTranslations: Record<
  'pt-BR' | 'en-US',
  PresentationProps
> = {
  'pt-BR': {
    title: 'Alegria',
    text: 'O projeto Alegria - Aprendizagem de leitura e escrita, gerando respeito, inclusão e autonomia -, visa a promover a alfabetização e o letramento de adultos com deficiência intelectual. O principal objetivo é criar oportunidades de aprendizagem nas áreas de leitura, escrita e matemática. Baseado nos princípios de Paulo Freire e Emilia Ferreiro, o projeto busca desenvolver oficinas que estimulem a autonomia, a inclusão e o respeito, abordando temas sociais relevantes e promovendo a cidadania. As ações são conduzidas por docentes e discentes de cursos como Letras, Pedagogia, Matemática, entre outros.',
    alt: '',
  },
  'en-US': {
    title: 'Alegria',
    text: 'The Alegria project - Literacy and writing learning, generating respect, inclusion, and autonomy - aims to promote literacy and education for adults with intellectual disabilities. The main objective is to create learning opportunities in the areas of reading, writing, and mathematics. Based on the principles of Paulo Freire and Emilia Ferreiro, the project seeks to develop workshops that stimulate autonomy, inclusion, and respect, addressing relevant social issues and promoting citizenship. The actions are carried out by professors and students from courses such as Language and Literature, Pedagogy, Mathematics, among others.',
    alt: '',
  },
}

export const cardArticleTranslations: Record<
  'pt-BR' | 'en-US',
  CardArticleWrapperProps
> = {
  'pt-BR': {
    title: 'Entre palavras e pensamentos',
    text: 'Confira nossas pílulas sobre o projeto Alegria',
    ariaLabel: 'Buscar artigo',
    placeholder: 'Cognição',
    buttonLabel: 'Buscar',
    clearButtonLabel: 'Limpar',
  },
  'en-US': {
    title: 'Between words and thoughts',
    text: 'Check out our insights on Alegria project',
    ariaLabel: 'Search article',
    placeholder: 'Cognition',
    buttonLabel: 'Search',
    clearButtonLabel: 'Clear',
  },
}
