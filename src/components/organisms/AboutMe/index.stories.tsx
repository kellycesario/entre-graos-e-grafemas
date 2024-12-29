import { AboutMe } from './index'

export default {
  title: 'Organisms/AboutMe',
  component: AboutMe,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Sobre mim',
    image: '/images/about/1.webp',
    imageDescription: '',
    content: '',
  },
}

export const Default = {}
