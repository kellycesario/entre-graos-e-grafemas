import { getAllEntries } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { PartnersWrapper } from '@/organisms/PartnersWrapper'
import { Footer } from '@/organisms/Footer'

export default async function Parcerias() {
  const partnerships = await getAllEntries('partner')

  return (
    <>
      <main>
        <Hero
          title="Entre grãos e grafemas"
          text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café"
          video="/videos/coffee-07.mp4"
          hasBreadcrumb={true}
        />
        {partnerships?.length > 0 && (
          <PartnersWrapper
            title="Parcerias que transformam"
            text="A vida é mais rica quando dividimos uma xícara de café - porque compartilhar é o melhor ingrediente para nossos sucessos!"
            partners={partnerships}
          />
        )}
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/3.png"
        backgroundColor="#8C4949"
      />
    </>
  )
}
