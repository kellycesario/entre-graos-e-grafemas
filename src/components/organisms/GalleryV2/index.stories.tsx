import { GalleryV2 } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/GalleryV2',
  component: GalleryV2,
  parameters: {
    layout: 'centered',
  },
  args: {
    images: [
      { image: '/images/books/1.webp', imageDescription: '' },
      { image: '/images/books/2.jpg', imageDescription: '' },
      { image: '/images/books/3.jpg', imageDescription: '' },
      { image: '/images/books/4.jpg', imageDescription: '' },
      { image: '/images/books/5.jpg', imageDescription: '' },
    ],
    hasImages: true,
  },
  argTypes: {
    images: {
      ...disableTable,
    },
  },
}

export const Default = {}
