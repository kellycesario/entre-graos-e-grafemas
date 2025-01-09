import { headers } from 'next/headers'
import { getAllEntries, getEntry } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { AboutMe } from '@/organisms/AboutMe'
import { RecentVideosWrapper } from '@/organisms/RecentVideosWrapper'
import { Curiosities } from '@/organisms/Curiosities'
import { Footer } from '@/organisms/Footer'
import { getLocale } from '@/utils/getLocale/getLocale'
import { navigation, heroTranslations } from '@/data/translations/layout'

export default async function SobreMim() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const hero = heroTranslations[locale]
  const navigationItems = navigation[locale]

  const curiosities = await getAllEntries('curiosity')
  const videos = await getAllEntries('video')
  const aboutMe = (await getEntry('aboutMe')) || {}

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
        />
        {aboutMe?.title && aboutMe?.content && (
          <AboutMe
            title={aboutMe.title}
            image={aboutMe?.image?.image ? aboutMe.image.image.url : null}
            imageDescription={aboutMe?.image?.imageDescription}
            content={aboutMe?.content}
          />
        )}
        {videos?.length > 0 && (
          <RecentVideosWrapper
            title="Fique por dentro:"
            text="Acompanhe o conteúdo mais recente postado em nosso canal do YouTube"
            maxResults={2}
            videos={videos}
          />
        )}
        {curiosities?.length > 0 && <Curiosities curiosities={curiosities} />}
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/3.png"
        backgroundColor="#5C6B6B"
        navigationItems={navigationItems}
      />
    </>
  )
}
