import { LocalIcon } from './index'
import { Sprites } from '@/ions/Sprites'
import { StoryFn } from '@storybook/react'
import { disableTable, sprites } from '@/storybook-docs/argTypes'

export default {
  component: LocalIcon,
  title: 'Ions/LocalIcon',
  parameters: {
    layout: 'centered',
  },
  args: {
    fill: 'red',
    icon: 'arrows',
  },
  argTypes: {
    ...sprites,
    className: {
      ...disableTable,
    },
    width: {
      ...disableTable,
    },
    height: {
      ...disableTable,
    },
    fill: {
      control: {
        type: 'color',
      },
    },
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
