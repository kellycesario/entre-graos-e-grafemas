import { getAllEntries } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { RecentVideosWrapper } from '@/organisms/RecentVideosWrapper'
import { ProjectsCTA } from '@/organisms/ProjectsCTA'
import { CardBannerWrapper } from '@/organisms/CardBannerWrapper'
import { Footer } from '@/organisms/Footer'
import styles from './homepage.module.scss'

export default async function Home() {
  const videos = await getAllEntries('video')

  return (
    <>
      <main className={styles.homepage}>
        <Hero
          title="Entre grãos e grafemas"
          text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café"
          video="/videos/coffee-05.mp4"
          hasBreadcrumb={false}
        />
        <RecentVideosWrapper
          title="Fique por dentro:"
          text="Acompanhe o conteúdo mais recente postado em nosso canal do YouTube"
          maxResults={2}
          videos={videos}
        />
        <ProjectsCTA
          alt=""
          image="/images/books/2.jpg"
          title="Conheça o projeto eLinC"
          text="Mergulhe em uma jornada fascinante pelo universo da Linguística, em que teoria e prática se encontram para explorar a Gramática Gerativa e a Linguística Cognitiva de forma colaborativa e inovadora"
          firstButtonLabel="Mais sobre o eLinC"
          secondButtonLabel="Visite o site oficial"
          firstButtonHref="/elinc"
          secondButtonHref="https://www.elincpucminas.com/"
          direction="row-reverse"
        />
        <ProjectsCTA
          title="Conheça o projeto Alegria"
          text="O projeto promove a alfabetização e o letramento de adultos que possuem dificuldade de aprendizado"
          firstButtonLabel="Mais sobre o Alegria"
          secondButtonLabel="Alegria no PROEX da PUC Minas"
          firstButtonHref="/alegria"
          secondButtonHref="https://proex.pucminas.br/2022/11/07/alegria-aprendizagem-de-leitura-e-escrita-gerando-respeito-inclusao-e-autonomia/"
          direction="row"
          hasAnimation={true}
        />
        <ProjectsCTA
          alt=""
          image="/images/research/1.webp"
          title="Conheça mais pesquisas"
          text="Embarque em um universo de estudos profundos sobre sintaxe, fonologia, léxico, morfologia e aquisição da linguagem"
          firstButtonLabel="Mais sobre minhas pesquisas"
          firstButtonHref="/pesquisas"
          secondButtonHref=""
          direction="row-reverse"
        />
        <CardBannerWrapper />
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/9.png"
        backgroundColor="#5C6B6B"
      />
    </>
  )
}
