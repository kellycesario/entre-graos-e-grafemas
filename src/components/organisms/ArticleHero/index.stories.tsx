import { ArticleHero } from './index'

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
}

export const Default = {}
