import { getAllEntries } from '@/api/contentful'
import { Hero } from '@/organisms/Hero'
import { Accordion } from '@/organisms/Accordion'
import { Form } from '@/organisms/Form'
import { Footer } from '@/organisms/Footer'

export default async function Contato() {
  const questions = await getAllEntries('faq')

  return (
    <>
      <main>
        <Hero
          title="Entre grãos e grafemas"
          text="Navegue comigo pelas interfaces da linguística e saboreie cada ramificação com um café"
          video="/videos/coffee-04.mp4"
          hasBreadcrumb={true}
        />
        {questions?.length > 0 && (
          <Accordion
            title="Perguntas frequentes"
            frequentlyAskedQuestions={questions}
          />
        )}
        <Form title="Ainda com dúvidas? Escreva-me!" />
      </main>
      <Footer />
    </>
  )
}
