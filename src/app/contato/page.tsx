import { headers } from 'next/headers'
import { getAllEntries } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { Accordion } from '@/organisms/Accordion'
import { Form } from '@/organisms/Form'
import { Footer } from '@/organisms/Footer'
import { getLocale } from '@/utils/getLocale/getLocale'
import { navigation, heroTranslations } from '@/data/translations/layout'

export default async function Contato() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const hero = heroTranslations[locale]
  const navigationItems = navigation[locale]

  const questions = await getAllEntries('faq')

  return (
    <>
      <main>
        <Hero
          title={hero.title}
          text={hero.text}
          firstButtonLabel={hero.firstButtonLabel}
          secondButtonLabel={hero.secondButtonLabel}
          video="/videos/coffee-04.mp4"
          hasBreadcrumb={true}
        />
        {questions?.length > 0 && (
          <Accordion
            title="Perguntas frequentes"
            frequentlyAskedQuestions={questions}
          />
        )}
        <Form title="Ainda com dúvidas? Escreva-me!" />
      </main>
      <Footer navigationItems={navigationItems} />
    </>
  )
}
