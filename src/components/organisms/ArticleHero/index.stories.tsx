import { ArticleHero } from './index'
import { Sprites } from '@/ions/Sprites'
import { StoryFn } from '@storybook/react'

export default {
  title: 'Organisms/ArticleHero',
  component: ArticleHero,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Excited to work on your next project?',
    author: 'Arabie Bezri Hermont',
    date: '25 de dezembro de 2024',
    image: '/images/coffee/8.jpg',
    alt: '',
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
