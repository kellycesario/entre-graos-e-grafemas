import { Hero } from '@/organisms/Hero'
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
      </main>
      <Footer />
    </>
  )
}
