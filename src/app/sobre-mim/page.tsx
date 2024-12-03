import { Hero } from '@/organisms/Hero'
import { Footer } from '@/organisms/Footer'

export default function SobreMim() {
  return (
    <>
      <main>
        <Hero
          title="Entre grãos e grafemas"
          text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café"
          video="/videos/coffee-06.mp4"
          hasBreadcrumb={true}
        />
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/3.png"
        backgroundColor="#5C6B6B"
      />
    </>
  )
}
