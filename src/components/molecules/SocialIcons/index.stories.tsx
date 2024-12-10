import { SocialIcons } from './index'
import { backgroundColorArgTypes } from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/SocialIcons',
  component: SocialIcons,
  parameters: {
    layout: 'centered',
  },
  args: {
    backgroundColor: 'red',
  },
  argTypes: {
    ...backgroundColorArgTypes,
  },
}

export const Default = {}
