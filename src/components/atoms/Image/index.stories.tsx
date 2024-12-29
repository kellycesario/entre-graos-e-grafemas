import { ImageWrapper } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Atoms/ImageWrapper',
  component: ImageWrapper,
  parameters: {
    layout: 'centered',
  },
  args: {
    image:
      'https://i.pinimg.com/736x/8b/a9/bd/8ba9bdfdf08cd5a89903531dcc0660be.jpg',
    width: 734,
    height: 275,
    imageDescription: 'Tirinha da Mafalda',
  },
  argTypes: {
    className: {
      ...disableTable,
    },
    width: {
      ...disableTable,
    },
    height: {
      ...disableTable,
    },
    image: {
      ...disableTable,
    },
    imageDescription: {
      ...disableTable,
    },
  },
}

export const Default = {}
