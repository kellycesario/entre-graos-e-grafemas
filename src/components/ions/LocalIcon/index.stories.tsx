import { Sprites } from '@/components/ions/Sprites'
import { LocalIcon } from './index'
import { StoryFn } from '@storybook/react'

export default {
  component: LocalIcon,
  title: 'Ions/LocalIcon',
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
