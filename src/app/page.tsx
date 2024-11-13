import { ProjectsCTA } from '@/organisms/ProjectsCTA'
import { Hero } from '@/organisms/Hero'
import { Footer } from '@/organisms/Footer'
import { CardBannerWrapper } from '@/organisms/CardBannerWrapper'
import { RecentVideosWrapper } from '@/organisms/RecentVideosWrapper'
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
        <RecentVideosWrapper
          title="Parcerias que transformam"
          text="A vida é mais rica quando dividimos uma xícara de café - porque compartilhar é o melhor ingrediente para nossos sucessos!"
        />
        <ProjectsCTA
          alt=""
          image="/images/eLinC/1.jpg"
          title="Conheça o projeto eLinC"
          text="O grupo explora construtos teóricos da Gramática Gerativa e da Linguística Cognitiva de forma colaborativa"
          firstButtonLabel="Mais sobre o eLinC"
          secondButtonLabel="Visite o site oficial"
          firstButtonHref="/elinc"
          secondButtonHref=""
          direction="row-reverse"
        />
        <ProjectsCTA
          title="Conheça o projeto Alegria"
          text="O projeto promove a alfabetização e o letramento de adultos que possuem dificuldade de aprendizado"
          firstButtonLabel="Mais sobre o Alegria"
          secondButtonLabel="Visite o site oficial"
          firstButtonHref="/alegria"
          direction="row"
          hasAnimation={true}
        />
        <ProjectsCTA
          alt=""
          image="/images/research/1.webp"
          title="Conheça mais pesquisas"
          text="Embarque no mundo da sintaxe, fonologia, léxico, morfologia, aquisição de linguage  oral e  escrita e muito mais"
          firstButtonLabel="Mais pesquisas"
          firstButtonHref="/pesquisas"
          secondButtonHref=""
          direction="row-reverse"
        />
        <CardBannerWrapper />
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/3.png"
        backgroundColor="#5C6B6B"
      />
    </>
  )
}
