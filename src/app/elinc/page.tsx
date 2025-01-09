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
import { navigation, heroTranslations } from '@/data/translations/layout'

interface ArticleProject {
  project?: 'elinc' | 'alegria' | 'pesquisas'
}

export default async function Elinc() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const hero = heroTranslations[locale]
  const navigationItems = navigation[locale]

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
          backgroundColor="cordovan"
          title="O eLinC"
          text="O Grupo de Estudos em Linguagem e Cognição explora, de maneira colaborativa, construtos teóricos oriundos de diferentes abordagens da Linguística, como a Gramática Gerativa e a Linguística Cognitiva. O objetivo é promover uma compreensão aprofundada dos processos envolvidos na aquisição, produção, compreensão e interpretação da linguagem na modalidade oral ou escrita, investigando como as estruturas cognitivas influenciam e são influenciadas pela linguagem em suas diversas manifestações."
          image="/images/books/2.jpg"
          alt={''}
        />
        <Suspense fallback={<div>Loading articles...</div>}>
          <CardArticleWrapper
            title="Entre palavras e pensamentos"
            text="Confira nossas pílulas sobre linguagem e cognição humana"
            totalPages={totalPages}
            articles={filteredArticles}
            mainColor="#8C4949"
          />
        </Suspense>
        <ContactMeCTA
          backgroundImage="/images/coffee/3.png"
          backgroundColor="#8C4949"
        />
        <MoreProjects />
      </main>
      <Footer navigationItems={navigationItems} />
    </>
  )
}
