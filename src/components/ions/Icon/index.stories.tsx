import { Icon } from './index'
import { IconBook } from '@tabler/icons-react'

export default {
  title: 'Ions/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
  args: {
    Icon: IconBook,
    color: '#8c4949',
    size: 40,
    stroke: 2,
  },
  argTypes: {
    Icon: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
