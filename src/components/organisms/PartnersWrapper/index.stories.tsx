import { PartnersWrapper } from './index'

export default {
  title: 'Organisms/PartnersWrapper',
  component: PartnersWrapper,
  parameters: {
    layout: 'centered',
  },
  args: {
    title: 'Parcerias que transformam',
    text: 'A vida é mais rica quando dividimos uma xícara de café - porque compartilhar é o melhor ingrediente para nossos sucessos!',
    partners: [
      {
        category: 'Pesquisadores',
        name: 'Daisy',
        role: '',
        description: '',
        image: {
          image: {
            url: '',
            imageDescription: '',
          },
        },
        socialNetworkCollection: {
          icon: '',
          link: '',
        },
      },
    ],
  },
}

export const Default = {}
