import { Header } from './index'
import { Sprites } from '@/ions/Sprites'
import { StoryFn } from '@storybook/react'

export default {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
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
