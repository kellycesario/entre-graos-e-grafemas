import { Presentation } from './index'
import { Sprites } from '@/ions/Sprites'
import { StoryFn } from '@storybook/react'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/Presentation',
  component: Presentation,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'O eLinC',
    text: 'O grupo explora construtos teóricos de campos como Gramática Gerativa e Linguística Cognitiva de forma colaborativa. O grupo explora construtos teóricos de campos como Gramática Gerativa e Linguística Cognitiva de forma colaborativa.',
    backgroundColor: 'cordovan',
    image: '/images/research/2.webp',
    alt: '',
  },
  argTypes: {
    alt: {
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
