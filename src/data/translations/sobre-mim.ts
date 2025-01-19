import { HeroProps } from '@/organisms/Hero'
import { RecentVideosWrapperProps } from '@/organisms/RecentVideosWrapper'

export const heroTranslations: Record<'pt-BR' | 'en-US', HeroProps> = {
  'pt-BR': {
    title: 'Eu, Arabie Bezri Hermont',
    text: 'Que tal descobrir mais sobre mim e minha trajetória acadêmica? E, claro, não se esqueça do café!',
    firstButtonLabel: 'Meu canal no YouTube',
    secondButtonLabel: 'Entre em contato',
  },
  'en-US': {
    title: 'Me, Arabie Bezri Hermont',
    text: 'How about learning more about me and my academic journey? And, of course, don’t forget your coffee!',
    firstButtonLabel: 'My YouTube channel',
    secondButtonLabel: 'Get in Touch',
  },
}

export const recentVideosWrapperTranslations: Record<
  'pt-BR' | 'en-US',
  RecentVideosWrapperProps
> = {
  'pt-BR': {
    title: 'Fique por dentro:',
    text: 'Confira o conteúdo mais recente no nosso canal do YouTube e descubra mais sobre o meu trabalho – afinal, quanto mais você conhecer o que faço, mais vai me entender!',
    buttonLabel: 'Acesse o canal',
  },
  'en-US': {
    title: 'Stay updated:',
    text: ' Check out the latest content on our YouTube channel and learn more about my work – after all, the more you get to know what I do, the better you will understand me!',
    buttonLabel: 'Access the channel',
  },
}
