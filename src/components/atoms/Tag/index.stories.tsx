import { Tag } from './index'
import { colorArgTypes, backgroundColorArgTypes } from '@/stories/argTypes'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    ...colorArgTypes,
    ...backgroundColorArgTypes,
    hasBackgroundColor: {
      table: {
        disable: true,
      },
    },
  },
}

export const WithBackground = {
  args: {
    color: 'white',
    children: 'Tag text example',
    backgroundColor: 'cosmos',
    hasBackgroundColor: true,
  },
}

export const WithoutBackground = {
  args: {
    color: 'black',
    children: 'Tag text example',
    hasBackgroundColor: false,
  },
  argTypes: {
    backgroundColor: {
      table: {
        disable: true,
      },
    },
  },
}
