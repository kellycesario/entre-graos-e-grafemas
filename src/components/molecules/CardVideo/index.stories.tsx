import { CardVideo } from './index'
import { StoryFn } from '@storybook/react'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/CardVideo',
  component: CardVideo,
  parameters: {
    layout: 'centered',
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
  decorators: [
    (Story: StoryFn) => {
      return (
        <div style={{ width: '50%', margin: '0 auto' }}>
          <Story />
        </div>
      )
    },
  ],
}

export const Default = {}
