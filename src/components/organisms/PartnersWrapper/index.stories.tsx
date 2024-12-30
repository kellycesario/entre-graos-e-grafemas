import { PartnersWrapper } from './index'
import { Sprites } from '@/ions/Sprites'
import { StoryFn } from '@storybook/react'

export default {
  title: 'Organisms/PartnersWrapper',
  component: PartnersWrapper,
  parameters: {
    layout: '',
  },
  args: {
    title: 'Parcerias que transformam',
    text: 'A vida é mais rica quando dividimos uma xícara de café - porque compartilhar é o melhor ingrediente para nossos sucessos!',
    partners: [
      {
        category: 'Pesquisadores',
        name: 'Noam Chomsky',
        role: 'Linguista e filósofo americano',
        description:
          'Noam Chomsky é um linguista, filósofo, cientista cognitivo, historiador e ativista político norte-americano, amplamente reconhecido por suas contribuições revolucionárias no campo da linguística e por suas análises políticas e críticas sociais.',
        image: {
          image: {
            url: 'https://broadview.org/wp-content/uploads/2020/04/Screen-Shot-2020-04-24-at-9.51.10-AM-1020x0-c-default.jpg',
            imageDescription: '',
          },
        },
        socialNetworkCollection: {
          items: [
            {
              icon: 'Lattes',
              link: '/',
            },
            {
              icon: 'ResearchGate',
              link: '',
            },
          ],
        },
      },
    ],
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
