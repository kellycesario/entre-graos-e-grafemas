import { CardPartner } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/CardPartner',
  component: CardPartner,
  parameters: {
    layout: 'centered',
  },
  args: {
    image: '/images/books/1.webp',
    name: 'eLinC',
    role: 'Gerativismo de Chomsky: a teoria que transformou a linguística',
    description:
      'Neste artigo, vamos explorar o gerativismo de Noam Chomsky, que mudou a forma como entendemos a linguagem',
  },
  argTypes: {
    link: {
      ...disableTable,
    },
    icons: {
      ...disableTable,
    },
  },
}

export const Default = {}
