import { IconLayoutGridAdd } from '@tabler/icons-react'
import { Hero } from '@/organisms/Hero'
import { Presentation } from '@/organisms/Presentation'
import { CardArticleWrapper } from '@/organisms/CardArticleWrapper'
import { ContactMeCTA } from '@/organisms/ContactMeCTA'
import { MoreProjects } from '@/organisms/MoreProjects'
import { Footer } from '@/organisms/Footer'

export default function Pesquisas() {
  return (
    <>
      <main>
        <Hero
          title="Entre grãos e grafemas"
          text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificaçãocom um café"
          video="/videos/coffee-02.mp4"
          hasBreadcrumb={true}
        />
        <Presentation
          backgroundColor="dim-gray"
          title="Pesquisas"
          text="Embarque no mundo da fonética, morfologia e muito mais. Embarque no mundo da fonética, morfologia e muito mais. Embarque no mundo da fonética, morfologia e muito mais. Embarque no mundo da fonética, morfologia e muito mais"
          image="/images/research/2.webp"
          alt=""
        />
        <CardArticleWrapper
          project="pesquisas"
          title="Entre palavras e pensamentos"
          text="Confira nossas pílulas sobre fonética, morfologia e muito mais"
          icon={IconLayoutGridAdd}
        />
        <ContactMeCTA
          backgroundImage="/images/coffee/3.png"
          backgroundColor="#5C6B6B"
        />
        <MoreProjects />
      </main>
      <Footer />
    </>
  )
}
