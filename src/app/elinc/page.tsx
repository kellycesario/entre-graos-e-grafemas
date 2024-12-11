import { Suspense } from 'react'
import { Hero } from '@/organisms/Hero'
import { Presentation } from '@/organisms/Presentation'
import { CardArticleWrapper } from '@/organisms/CardArticleWrapper'
import { ContactMeCTA } from '@/organisms/ContactMeCTA'
import { MoreProjects } from '@/organisms/MoreProjects'
import { Footer } from '@/organisms/Footer'

export default function Elinc() {
  return (
    <>
      <main>
        <Hero
          title="Entre grãos e grafemas"
          text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café"
          video="/videos/coffee.mp4"
          hasBreadcrumb={true}
        />
        <Presentation
          backgroundColor="cordovan"
          title="O eLinC"
          text="O Grupo de Estudos em Linguagem e Cognição explora, de maneira colaborativa, construtos teóricos oriundos de diferentes abordagens da Linguística, como a Gramática Gerativa e a Linguística Cognitiva. O objetivo é promover uma compreensão aprofundada dos processos envolvidos na aquisição, produção e interpretação da linguagem, investigando como as estruturas cognitivas influenciam e são influenciadas pela linguagem em suas diversas manifestações"
          image="/images/books/2.jpg"
          alt={''}
        />
        <Suspense fallback={<div>Loading articles...</div>}>
          <CardArticleWrapper
            project="elinc"
            title="Entre palavras e pensamentos"
            text="Confira nossas pílulas sobre linguagem e cognição humana"
            totalPages={2}
          />
        </Suspense>
        <ContactMeCTA
          backgroundImage="/images/coffee/3.png"
          backgroundColor="#8C4949"
        />
        <MoreProjects />
      </main>
      <Footer />
    </>
  )
}
