import { CardPartner } from './index'
import { Sprites } from '@/ions/Sprites'
import { StoryFn } from '@storybook/react'
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
    socialNetwork: [
      {
        icon: 'Lattes',
        link: '',
      },
      {
        icon: 'ResearchGate',
        link: '',
      },
    ],
  },
  argTypes: {
    link: {
      ...disableTable,
    },
    icons: {
      ...disableTable,
    },
    imageDescription: {
      ...disableTable,
    },
    socialNetwork: {
      ...disableTable,
    },
  },
  decorators: [
    (Story: StoryFn) => {
      return (
        <div>
          <Sprites />
          <Story />
        </div>
      )
    },
  ],
}

export const Default = {}
