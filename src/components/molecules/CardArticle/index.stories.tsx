import { CardArticle } from './index'

export default {
  title: 'Molecules/CardArticle',
  component: CardArticle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    image:
      '/images/books/1.webp',
    tag: 'eLinC',
    title: 'Gerativismo de Chomsky: a teoria que transformou a linguística',
    text: 'Neste artigo, vamos explorar o gerativismo de Noam Chomsky, que mudou a forma como entendemos a linguagem',
    link: '',
  },
  argTypes: {
    link: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
