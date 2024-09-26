import { Text } from './index'
import {
  alignmentArgTypes,
  colorArgTypes,
  weightArgTypes
} from '@/stories/argTypes'

export default {
  title: 'Atoms/Text',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    align: 'center',
    color: 'dark-gray',
    children: 'Text example',
    weight: '600',
  },
  argTypes: {
    ...alignmentArgTypes,
    ...colorArgTypes,
    ...weightArgTypes
  },
}

export const Default = {}
