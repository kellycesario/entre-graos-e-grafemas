import { headers } from 'next/headers'
import { getAllEntries } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { RecentVideosWrapper } from '@/organisms/RecentVideosWrapper'
import { ProjectsCTA } from '@/organisms/ProjectsCTA'
import { CardBannerWrapper } from '@/organisms/CardBannerWrapper'
import { Footer } from '@/organisms/Footer'
import { getLocale } from '@/utils/getLocale/getLocale'
import { navigation } from '@/data/translations/layout'
import {
  recentVideosWrapperTranslations,
  elincTranslations,
  alegriaTranslations,
  pesquisasTranslations,
  cardBannerTranslations,
  heroTranslations,
} from '@/data/translations/homepage'
import styles from './homepage.module.scss'

export default async function Home() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const hero = heroTranslations[locale]
  const videosWrapper = recentVideosWrapperTranslations[locale]
  const elinc = elincTranslations[locale]
  const alegria = alegriaTranslations[locale]
  const pesquisas = pesquisasTranslations[locale]
  const cardBannerData = cardBannerTranslations[locale]
  const navigationItems = navigation[locale]

  const videos = await getAllEntries('video', 2, false, false, locale)

  return (
    <>
      <main className={styles.homepage}>
        <Hero
          title={hero.title}
          text={hero.text}
          firstButtonLabel={hero.firstButtonLabel}
          secondButtonLabel={hero.secondButtonLabel}
          video="/videos/coffee-05.mp4"
          hasBreadcrumb={false}
          locale={locale}
        />
        {videos?.length > 0 && (
          <RecentVideosWrapper
            title={videosWrapper.title}
            text={videosWrapper.text}
            maxResults={2}
            videos={videos}
            buttonLabel={videosWrapper.buttonLabel}
          />
        )}
        <ProjectsCTA
          alt=""
          image="/images/books/2.jpg"
          title={elinc.title}
          text={elinc.text}
          firstButtonLabel={elinc.firstButtonLabel}
          secondButtonLabel={elinc.secondButtonLabel}
          firstButtonHref="/elinc"
          secondButtonHref="https://www.elincpucminas.com/"
          direction="row-reverse"
        />
        <ProjectsCTA
          title={alegria.title}
          text={alegria.text}
          firstButtonLabel={alegria.firstButtonLabel}
          secondButtonLabel={alegria.secondButtonLabel}
          firstButtonHref="/alegria"
          secondButtonHref="https://proex.pucminas.br/2022/11/07/alegria-aprendizagem-de-leitura-e-escrita-gerando-respeito-inclusao-e-autonomia/"
          direction="row"
          hasAnimation={true}
        />
        <ProjectsCTA
          alt=""
          image="/images/research/1.webp"
          title={pesquisas.title}
          text={pesquisas.text}
          firstButtonLabel={pesquisas.firstButtonLabel}
          firstButtonHref={locale === 'pt-BR' ? '/pesquisas' : '/research'}
          secondButtonHref=""
          direction="row-reverse"
        />
        <CardBannerWrapper cardData={cardBannerData} />
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/9.png"
        backgroundColor="#5C6B6B"
        navigationItems={navigationItems}
        locale={locale}
      />
    </>
  )
}
