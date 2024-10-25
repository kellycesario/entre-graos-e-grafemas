import { CardCTA } from './index'

export default {
  title: 'Molecules/CardCTA',
  component: CardCTA,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    image: '/images/books/1.webp',
    projectName: 'eLinC',
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
