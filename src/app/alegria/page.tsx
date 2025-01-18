import { headers } from 'next/headers'
import { Suspense } from 'react'
import { getAllEntries } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { Presentation } from '@/organisms/Presentation'
import { CardArticleWrapper } from '@/organisms/CardArticleWrapper'
import { ContactMeCTA } from '@/organisms/ContactMeCTA'
import { MoreProjects } from '@/organisms/MoreProjects'
import { Footer } from '@/organisms/Footer'
import { getLocale } from '@/utils/getLocale/getLocale'
import {
  navigation,
  projectsListTranslations,
  moreProjectsTranslations,
} from '@/data/translations/layout'
import {
  presentationTranslations,
  cardArticleTranslations,
  heroTranslations,
} from '@/data/translations/alegria'

interface ArticleProject {
  project?: 'elinc' | 'alegria' | 'pesquisas'
}

export default async function Alegria() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const hero = heroTranslations[locale]
  const navigationItems = navigation[locale]
  const presentation = presentationTranslations[locale]
  const cardArticle = cardArticleTranslations[locale]
  const projectItems = projectsListTranslations[locale]
  const moreProjects = moreProjectsTranslations[locale]

  const articles = await getAllEntries('blogPost', 100, false, true, locale)
  const filteredArticles = articles.filter(
    (article: ArticleProject) => article.project === 'alegria'
  )
  const totalPages = Math.ceil(filteredArticles.length / 8)

  return (
    <>
      <main>
        <Hero
          title={hero.title}
          text={hero.text}
          firstButtonLabel={hero.firstButtonLabel}
          secondButtonLabel={hero.secondButtonLabel}
          video="/videos/coffee-03.mp4"
          hasBreadcrumb={true}
          locale={locale}
        />
        <Presentation
          title={presentation.title}
          text={presentation.text}
          alt={presentation.alt}
          image="/images/alegria/6.png"
          backgroundColor="light-blue"
        />
        <Suspense fallback={<div>Loading articles...</div>}>
          <CardArticleWrapper
            title={cardArticle.title}
            text={cardArticle.text}
            ariaLabel={cardArticle.ariaLabel}
            placeholder={cardArticle.placeholder}
            buttonLabel={cardArticle.buttonLabel}
            clearButtonLabel={cardArticle.clearButtonLabel}
            totalPages={totalPages}
            articles={filteredArticles}
            mainColor="#177F9C"
            locale={locale}
          />
        </Suspense>
        <ContactMeCTA
          backgroundImage="/images/coffee/3.png"
          backgroundColor="#177F9C"
          locale={locale}
        />
        <MoreProjects
          projectItems={projectItems}
          title={moreProjects.title}
          text={moreProjects.text}
          cta={moreProjects.cta}
        />
      </main>
      <Footer navigationItems={navigationItems} />
    </>
  )
}
