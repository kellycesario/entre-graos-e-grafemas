import { LargeButton } from './index'

export default {
  title: 'Atoms/LargeButton',
  component: LargeButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'A origem da Teoria Gerativa',
  },
  argTypes: {
    link: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
  },
}

export const Default = {}
