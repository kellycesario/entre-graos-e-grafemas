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
} from '@/data/translations/pesquisas'
interface ArticleProject {
  project?: 'elinc' | 'alegria' | 'pesquisas'
}

export default async function Pesquisas() {
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
    (article: ArticleProject) => article.project === 'pesquisas'
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
          video="/videos/coffee-02.mp4"
          hasBreadcrumb={true}
          locale={locale}
        />
        <Presentation
          title={presentation.title}
          text={presentation.text}
          alt={presentation.alt}
          image="/images/research/2.webp"
          backgroundColor="dim-gray"
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
            mainColor="#5C6B6B"
            locale={locale}
          />
        </Suspense>
        <ContactMeCTA
          backgroundImage="/images/coffee/3.png"
          backgroundColor="#5C6B6B"
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
