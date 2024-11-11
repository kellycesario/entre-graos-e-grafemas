import { Input, InputProps, FormData } from './index'
import { IconUser } from '@tabler/icons-react'
import { useForm, FormProvider } from 'react-hook-form'
import { Meta, StoryFn } from '@storybook/react'

export default {
  title: 'Molecules/Input',
  component: Input,
  args: {
    label: 'Nome',
    icon: IconUser,
    placeholder: 'Daisy',
    name: 'name',
    required: true,
  },
} as Meta<typeof Input>

const Template: StoryFn<InputProps> = (args) => {
  const methods = useForm<FormData>()

  return (
    <FormProvider {...methods}>
      <Input {...args} register={methods.register} />
    </FormProvider>
  )
}

export const Default = Template.bind({})
