import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { getAllEntries, getEntry } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { AboutMe } from '@/organisms/AboutMe'
import { RecentVideosWrapper } from '@/organisms/RecentVideosWrapper'
import { Curiosities } from '@/organisms/Curiosities'
import { Footer } from '@/organisms/Footer'
import { getLocale } from '@/utils/getLocale/getLocale'
import { navigation } from '@/data/translations/layout'
import {
  recentVideosWrapperTranslations,
  heroTranslations,
} from '@/data/translations/sobre-mim'

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'
  const hero = heroTranslations[locale]

  const pageSuffix = locale === 'pt-BR' ? 'Sobre mim' : 'About me'
  const pageTitle = `${hero.title} - ${pageSuffix}`
  const pageDescription = `${hero.text!.substring(0, 160)}`

  return {
    title: pageTitle,
    description: pageDescription,
  }
}

export default async function SobreMim() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const hero = heroTranslations[locale]
  const videosWrapper = recentVideosWrapperTranslations[locale]
  const navigationItems = navigation[locale]

  const curiosities = await getAllEntries('curiosity')
  const videos = await getAllEntries('video', 5, false, false, locale)
  const aboutMe = (await getEntry('aboutMe', 1, false, locale)) || {}

  return (
    <>
      <main>
        <Hero
          title={hero.title}
          text={hero.text}
          firstButtonLabel={hero.firstButtonLabel}
          secondButtonLabel={hero.secondButtonLabel}
          video="/videos/coffee-06.mp4"
          hasBreadcrumb={true}
          locale={locale}
        />
        {aboutMe?.title && aboutMe?.content && (
          <AboutMe
            title={aboutMe.title}
            image={aboutMe?.image?.image ? aboutMe.image.image.url : null}
            imageDescription={aboutMe?.image?.imageDescription}
            content={aboutMe?.content}
            locale={locale}
          />
        )}
        {videos?.length > 0 && (
          <RecentVideosWrapper
            title={videosWrapper.title}
            text={videosWrapper.text}
            maxResults={5}
            videos={videos}
            buttonLabel={videosWrapper.buttonLabel}
          />
        )}
        {curiosities?.length > 0 && (
          <Curiosities curiosities={curiosities} locale={locale} />
        )}
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/3.png"
        backgroundColor="#5C6B6B"
        navigationItems={navigationItems}
        locale={locale}
      />
    </>
  )
}
