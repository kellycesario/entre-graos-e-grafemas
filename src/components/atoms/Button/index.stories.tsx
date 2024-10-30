import { Button } from './index'
import { IconArrowRight } from '@tabler/icons-react'
import { weightArgTypes } from '@/stories/argTypes'

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  args: {
    iconSize: 24,
    aria: '',
    weight: '',
    disabled: false,
  },
  argTypes: {
    variant: {
      control: { type: 'inline-radio' },
      options: ['primary', 'secondary'],
    },
    icon: {
      table: {
        disable: true,
      },
    },
    role: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    isButton: {
      table: {
        disable: true,
      },
    },
    useButtonStyle: {
      table: {
        disable: true,
      },
    },
  },
}

export const PrimaryButton = {
  args: {
    hasIcon: true,
    icon: IconArrowRight,
    iconColor: 'white',
    label: 'Sobre mim',
    variant: 'primary',
  },
  argTypes: {
    weight: {
      table: {
        disable: true,
      },
    },
    aria: {
      table: {
        disable: true,
      },
    },
    secondaryColor: {
      table: {
        disable: true,
      },
    },
  },
}

export const SecondaryButton = {
  args: {
    hasIcon: false,
    icon: IconArrowRight,
    iconColor: 'white',
    label: 'Entre em contato',
    variant: 'secondary',
  },
  argTypes: {
    weight: {
      table: {
        disable: true,
      },
    },
    aria: {
      table: {
        disable: true,
      },
    },
  },
}

export const IconButton = {
  args: {
    hasIcon: true,
    icon: IconArrowRight,
    iconColor: 'white',
    variant: 'primary',
    aria: 'página inicial',
  },
  argTypes: {
    weight: {
      table: {
        disable: true,
      },
    },
    hasIcon: {
      table: {
        disable: true,
      },
    },
    iconPosition: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    secondaryColor: {
      table: {
        disable: true,
      },
    },
  },
}

export const Link = {
  args: {
    hasIcon: false,
    icon: IconArrowRight,
    href: '',
    isButton: false,
    label: 'Início',
  },
  argTypes: {
    ...weightArgTypes,
    aria: {
      table: {
        disable: true,
      },
    },
    secondaryColor: {
      table: {
        disable: true,
      },
    },
    iconPosition: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
    iconSize: {
      table: {
        disable: true,
      },
    },
  },
}
