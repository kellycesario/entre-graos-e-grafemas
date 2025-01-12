import { NotFoundPageProps } from '@/app/not-found'

export const notFoundTranslations: Record<
  'pt-BR' | 'en-US',
  NotFoundPageProps
> = {
  'pt-BR': {
    text: 'Parece que a página que você buscou não existe',
    label: 'Voltar para o início',
  },
  'en-US': {
    text: "It seems that the page you're looking for doesn't exist",
    label: 'Go back to homepage',
  },
}
