import { CardCTA } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/CardCTA',
  component: CardCTA,
  parameters: {
    layout: 'centered',
  },
  args: {
    image: '/images/books/1.webp',
    projectName: 'eLinC',
    link: '',
  },
  argTypes: {
    link: {
      ...disableTable,
    },
  },
}

export const Default = {}
