import { RecentVideosWrapper } from './index'
import { Sprites } from '@/ions/Sprites'
import { StoryFn } from '@storybook/react'

export default {
  title: 'Organisms/RecentVideosWrapper',
  component: RecentVideosWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Parcerias que transformam',
    text: 'A vida é mais rica quando dividimos uma xícara de café - porque compartilhar é o melhor ingrediente para nossos sucessos!',
    maxResults: 2,
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
