import { Heading } from './index'
import {
  alignmentArgTypes,
  colorArgTypes,
  weightArgTypes,
  headingsArgTypes,
} from '@/stories/argTypes'

export default {
  title: 'Atoms/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    level: '1',
    align: 'center',
    color: 'dark-gray',
    children: 'Title example',
  },
  argTypes: {
    ...alignmentArgTypes,
    ...colorArgTypes,
    ...weightArgTypes,
    ...headingsArgTypes,
    id: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
