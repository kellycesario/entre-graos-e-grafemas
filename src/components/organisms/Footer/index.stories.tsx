import { JSX } from 'react'
import { Footer, FooterProps } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    hasCTA: true,
    backgroundImage: '/images/coffee/3.png',
    backgroundColor: '#8C4949',
    locale: 'pt-BR',
    navigationItems: [
      { item: 'Início', href: '/' },
      { item: 'eLinC', href: '/elinc' },
      { item: 'Alegria', href: '/alegria' },
      { item: 'Pesquisas', href: '/pesquisas' },
      { item: 'Parcerias', href: '/parcerias' },
      { item: 'Sobre mim', href: '/sobre-mim' },
    ],
  },
  argTypes: {
    locale: {
      ...disableTable,
    },
    navigationItems: {
      ...disableTable,
    },
  },
}

export const Default = (args: JSX.IntrinsicAttributes & FooterProps) => (
  <Footer {...args} />
)
