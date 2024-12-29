import { Curiosities } from './index'

export default {
  title: 'Organisms/Curiosities',
  component: Curiosities,
  parameters: {
    layout: 'centered',
  },
  args: {
    curiosities: [{ topic: '', description: '' }],
  },
}

export const Default = {}
