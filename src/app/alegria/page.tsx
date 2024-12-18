import { Suspense } from 'react'
import { Hero } from '@/organisms/Hero'
import { Presentation } from '@/organisms/Presentation'
import { CardArticleWrapper } from '@/organisms/CardArticleWrapper'
import { ContactMeCTA } from '@/organisms/ContactMeCTA'
import { MoreProjects } from '@/organisms/MoreProjects'
import { Footer } from '@/organisms/Footer'
import { getAllEntries } from '@/api/contentful'

interface ArticleProject {
  project?: 'elinc' | 'alegria' | 'pesquisas'
}

export default async function Alegria() {
  const articles = await getAllEntries('blogPost', 100, false, true)
  const filteredArticles = articles.filter(
    (article: ArticleProject) => article.project === 'alegria'
  )
  const totalPages = Math.ceil(filteredArticles.length / 8)

  return (
    <>
      <main>
        <Hero
          title="Entre grãos e grafemas"
          text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café"
          video="/videos/coffee-05.mp4"
          hasBreadcrumb={true}
        />
        <Presentation
          backgroundColor="light-blue"
          title="Alegria"
          text="O projeto Alegria visa promover a alfabetização e o letramento de adultos com dificuldades de aprendizado, especialmente aqueles com deficiência intelectual. O principal objetivo é criar oportunidades de aprendizagem nas áreas de leitura, escrita e matemática. Baseado nos princípios de Paulo Freire, o projeto busca desenvolver oficinas que estimulem a autonomia, a inclusão e o respeito, abordando temas sociais relevantes e promovendo a cidadania. As ações são conduzidas por docentes e discentes de cursos como Letras, Pedagogia e Matemática."
          image="/images/alegria/6.png"
          alt=""
        />
        <Suspense fallback={<div>Loading articles...</div>}>
          <CardArticleWrapper
            title="Entre palavras e pensamentos"
            text="Confira nossas pílulas sobre o projeto Alegria"
            totalPages={totalPages}
            articles={filteredArticles}
          />
        </Suspense>
        <ContactMeCTA
          backgroundImage="/images/coffee/3.png"
          backgroundColor="#177F9C"
        />
        <MoreProjects />
      </main>
      <Footer />
    </>
  )
}
