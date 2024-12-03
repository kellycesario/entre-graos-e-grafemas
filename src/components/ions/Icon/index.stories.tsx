import { Icon } from './index'
import { IconBook } from '@tabler/icons-react'
import { disableTable } from '@/stories/argTypes'

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
