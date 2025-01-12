import { Pagination } from './index'
import { disableTable } from '@/storybook-docs/argTypes'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
  args: {
    totalPages: 6,
    currentPage: 3,
    locale: 'pt-BR',
  },
  argTypes: {
    locale: {
      ...disableTable,
    },
  },
}

export const Default = {}
