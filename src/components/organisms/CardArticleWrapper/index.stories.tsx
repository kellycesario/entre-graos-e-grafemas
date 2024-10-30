import { CardArticleWrapper } from './index'
import { IconBrain, IconBooks, IconLayoutGridAdd } from '@tabler/icons-react'

export default {
  title: 'Organisms/CardArticleWrapper',
  component: CardArticleWrapper,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
}

export const Elinc = {
  args: {
    icon: IconBrain,
    project: 'elinc',
    title: 'Entre palavras e pensamentos',
    text: 'Confira nossas pílulas sobre linguagem e cognição humana',
  },
}
export const Alegria = {
  args: {
    icon: IconBooks,
    project: 'alegria',
    title: 'Entre palavras e pensamentos',
    text: 'Confira nossas pílulas sobre o projeto Alegria',
  },
}
export const Pesquisas = {
  args: {
    icon: IconLayoutGridAdd,
    project: 'pesquisas',
    title: 'Entre palavras e pensamentos',
    text: 'Confira nossas pílulas sobre fonética, morfologia e muito mais',
  },
}
