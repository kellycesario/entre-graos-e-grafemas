import { Form } from './index'

interface FormArgs {
  title: string
  locale: 'pt-BR' | 'en-US'
}

export default {
  title: 'Organisms/Form',
  component: Form,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title: 'Ainda com dúvidas? Escreva-me!',
    locale: 'pt-BR',
  },
  argTypes: {
    locale: {
      control: { type: 'radio', options: ['pt-BR', 'en-US'] },
    },
  },
}

export const Default = (args: FormArgs) => {
  const title =
    args.locale === 'en-US'
      ? 'Still have questions? Write to me!'
      : 'Ainda com dúvidas? Escreva-me!'

  return <Form {...args} title={title} />
}
