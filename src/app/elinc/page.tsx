import { Hero } from '@/organisms/Hero'
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
      </main>
      <Footer />
    </>
  )
}
