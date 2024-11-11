import { Textarea } from './index'
import { InputProps, FormData } from '../Input/index'
import { IconTableHeart } from '@tabler/icons-react'
import { useForm, FormProvider } from 'react-hook-form'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Molecules/Textarea',
  component: Textarea,
  args: {
    label: 'Nome',
    icon: IconTableHeart,
    placeholder: 'Gostaria de propor uma parceria',
    name: 'name',
    required: true,
  },
} as Meta<typeof Textarea>

const Template: StoryFn<InputProps> = (args) => {
  const methods = useForm<FormData>()

  return (
    <FormProvider {...methods}>
      <Textarea {...args} register={methods.register} />
    </FormProvider>
  )
}

export const Default = Template.bind({})
