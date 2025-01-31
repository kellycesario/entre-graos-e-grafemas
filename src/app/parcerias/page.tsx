import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { getAllEntries } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { PartnersWrapper } from '@/organisms/PartnersWrapper'
import { Footer } from '@/organisms/Footer'
import { getLocale } from '@/utils/getLocale/getLocale'
import { navigation } from '@/data/translations/layout'
import {
  partnersTranslations,
  heroTranslations,
} from '@/data/translations/parcerias'

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'
  const hero = heroTranslations[locale]

  const pageSuffix = locale === 'pt-BR' ? 'Parcerias' : 'Partnerships'
  const pageTitle = `${hero.title} - ${pageSuffix}`
  const pageDescription = `${hero.text!.substring(0, 160)}`

  return {
    title: pageTitle,
    description: pageDescription,
  }
}

export default async function Parcerias() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const hero = heroTranslations[locale]
  const partners = partnersTranslations[locale]
  const navigationItems = navigation[locale]

  const partnerships = await getAllEntries('partner', 100, false, false, locale)

  return (
    <>
      <main>
        <Hero
          title={hero.title}
          text={hero.text}
          firstButtonLabel={hero.firstButtonLabel}
          secondButtonLabel={hero.secondButtonLabel}
          video="/videos/coffee-07.mp4"
          hasBreadcrumb={true}
          locale={locale}
        />
        {partnerships?.length > 0 && (
          <PartnersWrapper
            title={partners.title}
            text={partners.text}
            partners={partnerships}
            locale={locale}
          />
        )}
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/3.png"
        backgroundColor="#8C4949"
        navigationItems={navigationItems}
        locale={locale}
      />
    </>
  )
}
