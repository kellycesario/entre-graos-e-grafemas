import { Hero } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Entre grãos e grafemas',
    text: 'Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café',
    video: 'videos/coffee.mp4',
    hasBreadcrumb: false,
  },
  argTypes: {
    hasBreadcrumb: {
      ...disableTable,
    },
  },
}

export const Default = {}
