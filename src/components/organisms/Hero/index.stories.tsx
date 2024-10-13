import { Hero } from './index'

export default {
  title: 'Organisms/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Entre grãos e grafemas',
    text: 'Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café',
    video: 'videos/coffee.mp4',
    hasBreadcrumb: true,
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
