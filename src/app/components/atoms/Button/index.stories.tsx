import { Button } from './index'
import { IconArrowRight  } from '@tabler/icons-react'

export default {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export const Buttonn = {
  args: {
    hasIcon: true,
    icon: IconArrowRight ,
    color: 'red',
    size: 24,
    label: 'Run',
    level: 'primary'
  },
}

export const Link = {
  args: {
    hasIcon: false,
    href: '',
    isButton: false,
    label: 'Run',
  },
}
