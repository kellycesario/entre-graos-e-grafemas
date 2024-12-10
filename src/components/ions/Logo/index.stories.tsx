import { Logo } from './index'
import { Sprites } from '@/ions/Sprites'
import { StoryFn } from '@storybook/react'

export default {
  title: 'Ions/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
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
