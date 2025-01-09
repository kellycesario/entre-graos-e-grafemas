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

export default async function Pesquisas() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const hero = heroTranslations[locale]
  const navigationItems = navigation[locale]

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
        />
        <Presentation
          backgroundColor="dim-gray"
          title="Pesquisas"
          text="Embarque no estudo aprofundado da sintaxe, morfologia, léxico, fonologia e outros campos da Linguística, explorando a organização das sentenças e formação de palavras, além da articulação dos sons da fala e da lingua, sua percepção e o impacto dessas estruturas nas várias modalidades de interação. Esses estudos são relacionados à cognicao e/ou à área de ensino. Além disso, há vários trabalhos relacionados à alfabetização em condições típicas e atípicas. Ao entender como essas disciplinas se inter-relacionam, é possível compreender como a linguagem é organizada mentalmente, influenciando o entendimento e a interação social."
          image="/images/research/2.webp"
          alt=""
        />
        <Suspense fallback={<div>Loading articles...</div>}>
          <CardArticleWrapper
            title="Entre palavras e pensamentos"
            text="Confira nossas pílulas sobre fonética, morfologia e muito mais"
            totalPages={totalPages}
            articles={filteredArticles}
            mainColor="#5C6B6B"
          />
        </Suspense>
        <ContactMeCTA
          backgroundImage="/images/coffee/3.png"
          backgroundColor="#5C6B6B"
        />
        <MoreProjects />
      </main>
      <Footer navigationItems={navigationItems} />
    </>
  )
}
