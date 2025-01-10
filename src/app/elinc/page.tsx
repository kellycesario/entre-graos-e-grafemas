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
  heroTranslations,
  projectsListTranslations,
  moreProjectsTranslations,
} from '@/data/translations/layout'
import {
  presentationTranslations,
  cardArticleTranslations,
} from '@/data/translations/elinc'

interface ArticleProject {
  project?: 'elinc' | 'alegria' | 'pesquisas'
}

export default async function Elinc() {
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
    (article: ArticleProject) => article.project === 'elinc'
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
          video="/videos/coffee.mp4"
          hasBreadcrumb={true}
        />
        <Presentation
          title={presentation.title}
          text={presentation.text}
          alt={presentation.alt}
          image="/images/books/2.jpg"
          backgroundColor="cordovan"
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
            mainColor="#8C4949"
          />
        </Suspense>
        <ContactMeCTA
          backgroundImage="/images/coffee/3.png"
          backgroundColor="#8C4949"
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
