import { ProjectsCTA } from '@/organisms/ProjectsCTA'
import { Hero } from '@/organisms/Hero'
import { Footer } from '@/organisms/Footer'
import styles from './homepage.module.scss'

export default function Home() {
  return (
    <>
      <main className={styles.homepage}>
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
        <ProjectsCTA
          alt=""
          image="/images/research/1.webp"
          title="Conheça mais pesquisas"
          text="Embarque no mundo da sintaxe, fonologia, léxico, morfologia, aquisição de linguage  oral e  escrita e muito mais"
          firstButtonLabel="Mais pesquisas"
          firstButtonHref="/pesquisas"
          direction="row-reverse"
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
