import { JSX } from 'react'
import { CardBannerWrapper, CardBannerWrapperProps } from './index'
import { IconPencil, IconHeartHandshake } from '@tabler/icons-react'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Organisms/CardBannerWrapper',
  component: CardBannerWrapper,
  parameters: {
    layout: 'centered',
  },
  args: {
    cardData: [
      {
        icon: IconPencil,
        link: '/sobre-mim',
        title: 'Quer saber mais sobre mim?',
        titleColor: 'white',
        label: 'Sobre mim',
        secondaryColor: 'white',
        backgroundColor: 'gunmetal',
        iconColor: 'white',
      },
      {
        icon: IconHeartHandshake,
        link: '/parcerias',
        title: 'Quer saber mais sobre minhas parcerias?',
        titleColor: 'dim-gray',
        label: 'Parcerias',
        secondaryColor: '#5C6B6B',
        backgroundColor: 'white',
        iconColor: '#5C6B6B',
      },
    ],
  },
  argTypes: {
    cardData: {
      ...disableTable,
    },
  },
}

export const Default = (
  args: JSX.IntrinsicAttributes & CardBannerWrapperProps
) => <CardBannerWrapper {...args} />
