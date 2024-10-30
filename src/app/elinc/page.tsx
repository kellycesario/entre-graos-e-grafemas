import { IconBrain } from '@tabler/icons-react'
import { Hero } from '@/organisms/Hero'
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
          text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificaçãocom um café"
          video="/videos/coffee.mp4"
          hasBreadcrumb={true}
        />
        <CardArticleWrapper
          project="elinc"
          title="Entre palavras e pensamentos"
          text="Confira nossas pílulas sobre linguagem e cognição humana"
          icon={IconBrain}
        />
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
