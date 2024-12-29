import { CardVideo } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/CardVideo',
  component: CardVideo,
  parameters: {
    layout: 'centered',
    viewport: { options: 'mobile1' },
  },
  args: {
    image: '/images/books/1.webp',
    tag: 'eLinC',
    title:
      "I'm sorry, this directory is encryptedPlease, enter your cipher to continue",
    link: '',
  },
  argTypes: {
    link: {
      ...disableTable,
    },
    className: {
      ...disableTable,
    },
  },
}

export const Default = {}
