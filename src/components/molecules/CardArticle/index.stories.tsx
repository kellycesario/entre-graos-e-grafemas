import { CardArticle } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/CardArticle',
  component: CardArticle,
  parameters: {
    layout: 'centered',
  },
  args: {
    image: { url: '/images/elinc/1.png' },
    tag: 'eLinC',
    title: 'Gerativismo de Chomsky: a teoria que transformou a linguística',
    description:
      'Neste artigo, vamos explorar o gerativismo de Noam Chomsky, que mudou a forma como entendemos a linguagem',
  },
  argTypes: {
    link: {
      ...disableTable,
    },
    className: {
      ...disableTable,
    },
    project: {
      ...disableTable,
    },
    slug: {
      ...disableTable,
    },
    image: {
      ...disableTable,
    },
  },
}

export const Default = {}
