import { Tag } from './index'
import {
  colorArgTypes,
  backgroundColorArgTypes,
  disableTable,
} from '@/storybook-docs/argTypes'

export default {
  title: 'Atoms/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...colorArgTypes,
    ...backgroundColorArgTypes,
    hasBackgroundColor: {
      ...disableTable,
    },
  },
}

export const WithBackground = {
  args: {
    color: 'white',
    children: 'Aquisição de linguagem',
    backgroundColor: 'cosmos',
    hasBackgroundColor: true,
  },
}

export const WithoutBackground = {
  args: {
    color: 'black',
    children: 'Fonética e fonologia',
    hasBackgroundColor: false,
  },
  argTypes: {
    backgroundColor: {
      ...disableTable,
    },
  },
}
