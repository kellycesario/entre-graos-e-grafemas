import { CardBanner } from './index'
import { IconPencil, IconHeartHandshake } from '@tabler/icons-react'
import { backgroundColorArgTypes, disableTable } from '@/stories/argTypes'

export default {
  title: 'Molecules/CardBanner',
  component: CardBanner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    ...backgroundColorArgTypes,
    link: {
      ...disableTable,
    },
    icon: {
      ...disableTable,
    },
  },
}

export const AboutMe = {
  args: {
    icon: IconPencil,
    link: '/sobre-mim',
    title: 'Quer saber mais sobre mim?',
    titleColor: 'white',
    label: 'Sobre mim',
    secondaryColor: 'white',
    backgroundColor: 'gunmetal',
    iconColor: 'white',
  },
}

export const Partnerships = {
  args: {
    icon: IconHeartHandshake,
    link: '/parcerias',
    title: 'Quer saber mais sobre minhas parcerias?',
    titleColor: 'dim-gray',
    label: 'Parcerias',
    secondaryColor: '#5C6B6B',
    backgroundColor: 'white',
    iconColor: '#5C6B6B',
  },
}
