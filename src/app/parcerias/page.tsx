import { headers } from 'next/headers'
import { getAllEntries } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { PartnersWrapper } from '@/organisms/PartnersWrapper'
import { Footer } from '@/organisms/Footer'
import { getLocale } from '@/utils/getLocale/getLocale'
import { navigation, heroTranslations } from '@/data/translations/layout'

export default async function Parcerias() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const hero = heroTranslations[locale]
  const navigationItems = navigation[locale]

  const partnerships = await getAllEntries('partner')

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
        />
        {partnerships?.length > 0 && (
          <PartnersWrapper
            title="Parcerias que transformam"
            text="A vida é mais rica quando dividimos uma xícara de café - porque compartilhar é o melhor ingrediente para nossos sucessos!"
            partners={partnerships}
          />
        )}
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/3.png"
        backgroundColor="#8C4949"
        navigationItems={navigationItems}
      />
    </>
  )
}
