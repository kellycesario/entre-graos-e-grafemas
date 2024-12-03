import { Breadcrumb } from './index'
import { disableTable } from '@/stories/argTypes'

export default {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
  },
  args: {
    pathname: 'Elinc',
  },
  argTypes: {
    pathname: {
      ...disableTable,
    },
  },
}

export const Default = {}
