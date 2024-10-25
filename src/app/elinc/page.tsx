import { Hero } from '@/organisms/Hero'
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
