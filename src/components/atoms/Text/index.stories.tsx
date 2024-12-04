import { Text } from './index'
import {
  alignmentArgTypes,
  colorArgTypes,
  weightArgTypes,
  disableTable,
} from '@/storybook-docs/argTypes'

export default {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  args: {
    align: 'center',
    color: 'dark-gray',
    children:
      'Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café',
    weight: '600',
  },
  argTypes: {
    ...alignmentArgTypes,
    ...colorArgTypes,
    ...weightArgTypes,
    className: {
      ...disableTable,
    },
  },
}

export const Default = {}
