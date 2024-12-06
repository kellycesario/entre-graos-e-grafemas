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
          text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café"
          video="/videos/coffee-02.mp4"
          hasBreadcrumb={true}
        />
        <Presentation
          backgroundColor="dim-gray"
          title="Pesquisas"
          text="Embarque no estudo aprofundado da fonética, morfologia e outros campos da Linguística, explorando a articulação dos sons da fala, sua percepção e o impacto dessas estruturas na comunicação. A fonética, ao analisar como os sons são produzidos e percebidos, se conecta à morfologia, que estuda a formação e estrutura das palavras. Ao entender como essas disciplinas se inter-relacionam, é possível compreender como a linguagem é organizada mentalmente, influenciando o entendimento e a interação social"
          image="/images/research/2.webp"
          alt=""
        />
        <CardArticleWrapper
          project="pesquisas"
          title="Entre palavras e pensamentos"
          text="Confira nossas pílulas sobre fonética, morfologia e muito mais"
          totalPages={2}
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
