import { ProjectsCTA } from './index'

export default {
  title: 'Organisms/ProjectsCTA',
  component: ProjectsCTA,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Conheça o projeto eLinC',
    text: 'O grupo explora construtos teóricos da Gramática Gerativa e da Linguística Cognitiva de forma colaborativa',
    image: '/images/eLinC/elinc.jpg',
    firstButtonLabel: 'Mais sobre o eLinC',
    secondButtonLabel: 'Visite o site oficial',
    alt: 'elinC',
  },
  argTypes: {
    image: {
      table: {
        disable: true,
      },
    },
    firstButtonHref: {
      table: {
        disable: true,
      },
    },
    secondButtonHref: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
