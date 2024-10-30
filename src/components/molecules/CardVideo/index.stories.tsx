import { CardVideo } from './index'

export default {
  title: 'Molecules/CardVideo',
  component: CardVideo,
  parameters: {
    layout: 'fullscreen',
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
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
