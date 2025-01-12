import { Header } from './index'
import { Sprites } from '@/ions/Sprites'
import { StoryFn } from '@storybook/react'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    locale: 'pt-BR',
    navigationItems: [
      { item: 'Início', href: '/' },
      { item: 'eLinC', href: '/elinc' },
      { item: 'Alegria', href: '/alegria' },
      { item: 'Pesquisas', href: '/pesquisas' },
      { item: 'Parcerias', href: '/parcerias' },
      { item: 'Sobre mim', href: '/sobre-mim' },
      { item: 'Contato', href: '/contato' },
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
  decorators: [
    (Story: StoryFn) => {
      return (
        <div>
          <Sprites />
          <Story />
        </div>
      )
    },
  ],
}

export const Default = {}
