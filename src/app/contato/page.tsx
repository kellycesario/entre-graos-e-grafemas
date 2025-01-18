import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { getAllEntries } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { Accordion } from '@/organisms/Accordion'
import { Form } from '@/organisms/Form'
import { Footer } from '@/organisms/Footer'
import { getLocale } from '@/utils/getLocale/getLocale'
import { navigation } from '@/data/translations/layout'
import { faqTranslations, heroTranslations } from '@/data/translations/contato'

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'
  const hero = heroTranslations[locale]

  const pageSuffix = locale === 'pt-BR' ? 'Entre em contato' : 'Get in Touch'
  const pageTitle = `${hero.title} - ${pageSuffix}`
  const pageDescription = `${hero.text!.substring(0, 160)}`

  return {
    title: pageTitle,
    description: pageDescription,
  }
}

export default async function Contato() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const hero = heroTranslations[locale]
  const faq = faqTranslations[locale]
  const navigationItems = navigation[locale]

  const questions = await getAllEntries('faq', 25, false, false, locale)

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
          locale={locale}
        />
        {questions?.length > 0 && (
          <Accordion
            title={faq.title}
            frequentlyAskedQuestions={questions}
            locale={locale}
          />
        )}
        <Form locale={locale} />
      </main>
      <Footer navigationItems={navigationItems} />
    </>
  )
}
