import { CardCTA } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/CardCTA',
  component: CardCTA,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    image: '/images/books/1.webp',
    projectName: 'eLinC',
    link: '',
    cta: 'Cognition',
  },
  argTypes: {
    link: {
      ...disableTable,
    },
  },
}

export const Default = {}
