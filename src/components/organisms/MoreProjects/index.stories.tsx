import { MoreProjects } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/MoreProjects',
  component: MoreProjects,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Entre um gole e outro',
    text: 'Enquanto você toma um café, continue a jornada pelos demais tópicos do site',
    cta: 'Confira também',
    projectItems: [
      { projectName: 'eLinC', link: '/elinc', image: '/images/elinc/1.png' },
      {
        projectName: 'Alegria',
        link: '/alegria',
        image: '/images/alegria/1.jpg',
      },
      {
        projectName: 'Minhas demais pesquisas',
        link: '/pesquisas',
        image: '/images/research/2.webp',
      },
      {
        projectName: 'Um pouco mais sobre mim',
        link: '/sobre-mim',
        image: '/images/about/1.webp',
      },
      {
        projectName: 'Minhas parcerias',
        link: '/parcerias',
        image: '/images/partnership/1.webp',
      },
    ],
  },
  argTypes: {
    locale: {
      ...disableTable,
    },
    projectItems: {
      ...disableTable,
    },
  },
}

export const Default = {}
