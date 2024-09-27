import { Icon } from './index'
import { IconBook } from "@tabler/icons-react"

export default {
  title: 'Ions/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    Icon: IconBook,
    color: 'red',
    size: 40,
  },

}

export const Default = {}
