import { Breadcrumb } from './index'

export default {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    items: [
      { label: 'Início', path: '/' },
      { label: 'Categoria', path: '/' },
      { label: 'Produto', path: '/' },
    ],
  },
  argTypes: {
    items: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
