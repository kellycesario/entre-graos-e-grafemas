import { CardPartner } from './index'
import { Sprites } from '@/ions/Sprites'
import { StoryFn } from '@storybook/react'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/CardPartner',
  component: CardPartner,
  parameters: {
    layout: '',
  },
  args: {
    image: '/images/books/1.webp',
    name: 'eLinC',
    role: 'Gerativismo de Chomsky: a teoria que transformou a linguística',
    description:
      'Noam Chomsky é um linguista, filósofo, cientista cognitivo, historiador e ativista político norte-americano, amplamente reconhecido por suas contribuições revolucionárias no campo da linguística e por suas análises políticas e críticas sociais.',
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
        <div style={{ width: '375px', margin: '0 auto' }}>
          <Sprites />
          <Story />
        </div>
      )
    },
  ],
}

export const Default = {}
