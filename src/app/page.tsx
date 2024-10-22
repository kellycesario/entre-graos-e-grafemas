import { ProjectsCTA } from '@/organisms/ProjectsCTA'
import { Hero } from '@/organisms/Hero'

export default function Home() {
  return (
    <main>
      <Hero
        title="Entre grãos e grafemas"
        text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificaçãocom um café"
        video="/videos/coffee-05.mp4"
        hasBreadcrumb={false}
      />
      <ProjectsCTA
        alt=""
        image="/images/eLinC/elinc.jpg"
        title="Conheça o projeto eLinC"
        text="O grupo explora construtos teóricos da Gramática Gerativa e da Linguística Cognitiva de forma colaborativa"
        firstButtonLabel="Mais sobre o eLinC"
        secondButtonLabel="Visite o site oficial"
        firstButtonHref="/elinc"
        secondButtonHref=""
        direction="row-reverse"
      />
    </main>
  )
}
