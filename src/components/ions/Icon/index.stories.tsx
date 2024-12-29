import { Icon } from './index'
import { disableTable } from '@/storybook-docs/argTypes'
import { IconBook } from '@tabler/icons-react'

export default {
  title: 'Ions/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  args: {
    Icon: IconBook,
    color: '#8c4949',
    size: 40,
    stroke: 2,
  },
  argTypes: {
    Icon: {
      ...disableTable,
    },
    className: {
      ...disableTable,
    },
  },
}

export const Default = {}
