import { Hero } from '@/organisms/Hero'
import { RecentVideosWrapper } from '@/organisms/RecentVideosWrapper'
import { Curiosities } from '@/organisms/Curiosities'
import { Footer } from '@/organisms/Footer'
import { AboutMe } from '@/organisms/AboutMe'

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
        <AboutMe />
        <RecentVideosWrapper
          title="Sobre mim e meu trabalho:"
          text="Nesta seção, você vai entender como meu trabalho reflete quem eu sou como profissional. Acompanhe meu conteúdo mais recente e conheça mais sobre minha trajetória e visão."
        />
        <Curiosities />
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/3.png"
        backgroundColor="#5C6B6B"
      />
    </>
  )
}
