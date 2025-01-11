import { AccordionProps } from '@/organisms/Accordion'

export const contactFormTranslations: Record<
  'pt-BR' | 'en-US',
  Record<string, string>
> = {
  'pt-BR': {
    title: 'Ainda com dúvidas? Escreva-me!',
    nome: 'Nome',
    email: 'Email',
    telefone: 'Telefone',
    assunto: 'Assunto',
    mensagem: 'Mensagem',
    enviarMensagem: 'Enviar mensagem',
    sucessoMensagem: 'Mensagem enviada com sucesso!',
    erroEmail: 'Por favor, insira seu e-mail',
    erroEmailInvalido: 'Por favor, insira um e-mail válido',
    erroMensagem: 'Por favor, insira uma mensagem',
    placeholderNome: 'Maria',
    placeholderEmail: 'maria@mail.com',
    placeholderTelefone: '+55 31 97777-7777',
    placeholderAssunto: 'Colaboração em artigo',
    placeholderMensagem: 'Escreva sua mensagem aqui',
  },
  'en-US': {
    title: 'Still have questions? Write to me!',
    nome: 'Name',
    email: 'Email',
    telefone: 'Phone',
    assunto: 'Subject',
    mensagem: 'Message',
    enviarMensagem: 'Send message',
    sucessoMensagem: 'Message sent successfully!',
    erroEmail: 'Please provide your email',
    erroEmailInvalido: 'Please enter a valid email address',
    erroMensagem: 'Please enter a message',
    placeholderNome: 'Mary',
    placeholderEmail: 'mary@mail.com',
    placeholderTelefone: '+55 31 97777-7777',
    placeholderAssunto: 'Collaboration in paper',
    placeholderMensagem: 'Write your message here',
  },
}

export const faqTranslations: Record<'pt-BR' | 'en-US', AccordionProps> = {
  'pt-BR': {
    title: 'Perguntas frequentes',
  },
  'en-US': {
    title: 'Frequently asked questions',
  },
}
