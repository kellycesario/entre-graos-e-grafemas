import { AccordionItem, AccordionItemProps } from './index'
import { JSX } from 'react'

export default {
  title: 'Molecules/AccordionItem',
  component: AccordionItem,
  parameters: {
    layout: 'fullscreen',
  },
}

export const Default = {
  args: {
    question: 'How long does a web design project take?',
    answer: '<p>Lorem ipsum dolor sit amet<p>',
    number: '01',
  },
  render: (args: JSX.IntrinsicAttributes & AccordionItemProps) => {
    console.log(args.answer)
    return <AccordionItem {...args} />
  },
}
