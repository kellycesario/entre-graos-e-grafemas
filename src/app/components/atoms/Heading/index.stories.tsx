import { Heading } from './index'
import {
  alignmentArgTypes,
  colorArgTypes,
  weightArgTypes,
  headingsArgTypes,
} from '@/app/stories/argTypes'

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
  },
}

export const Default = {}
