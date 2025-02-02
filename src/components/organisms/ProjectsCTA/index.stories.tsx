import { ProjectsCTA } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/ProjectsCTA',
  component: ProjectsCTA,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Conheça o projeto eLinC',
    text: 'O grupo explora construtos teóricos da Gramática Gerativa e da Linguística Cognitiva de forma colaborativa',
    image: '/images/elinc/1.png',
    firstButtonLabel: 'Mais sobre o eLinC',
    secondButtonLabel: 'Visite o site oficial',
    alt: 'elinC',
  },
  argTypes: {
    image: {
      ...disableTable,
    },
    firstButtonHref: {
      ...disableTable,
    },
    secondButtonHref: {
      ...disableTable,
    },
    hasAnimation: {
      ...disableTable,
    },
    alt: {
      ...disableTable,
    },
  },
}

export const Default = {}
