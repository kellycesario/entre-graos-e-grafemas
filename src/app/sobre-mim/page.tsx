import { getAllEntries, getEntry } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { RecentVideosWrapper } from '@/organisms/RecentVideosWrapper'
import { Curiosities } from '@/organisms/Curiosities'
import { Footer } from '@/organisms/Footer'
import { AboutMe } from '@/organisms/AboutMe'

export default async function SobreMim() {
  const curiosities = await getAllEntries('curiosity')
  const aboutMe = await getEntry('aboutMe')

  return (
    <>
      <main>
        <Hero
          title="Entre grãos e grafemas"
          text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café"
          video="/videos/coffee-06.mp4"
          hasBreadcrumb={true}
        />
        {aboutMe?.title && aboutMe?.content && (
          <AboutMe
            title={aboutMe.title}
            image={aboutMe?.image?.image?.url}
            imageDescription={aboutMe?.image?.imageDescription}
            content={aboutMe?.content}
          />
        )}
        <RecentVideosWrapper
          title="Sobre mim e meu trabalho:"
          text="Nesta seção, você vai entender como meu trabalho reflete quem eu sou como profissional. Acompanhe meu conteúdo mais recente e conheça mais sobre minha trajetória e visão."
          maxResults={5}
        />
        {curiosities?.length > 0 && <Curiosities curiosities={curiosities} />}
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/3.png"
        backgroundColor="#5C6B6B"
      />
    </>
  )
}
