import { ArticleHero } from '@/organisms/ArticleHero'
import { ArticleExpanded } from '@/organisms/ArticleExpanded'
import { getEntry } from '@/api/contentful'

export default async function Article() {
  const article = await getEntry('blogPost', 1, false)
  const content = article.contentCollection.items[0].content

  return (
    <>
      <main>
        <ArticleHero
          title={article.title}
          author={article.author}
          date={article.date}
          image={article.image?.url}
          alt=""
        />
      </main>

      <ArticleExpanded content={content} imagesV1={[]} imagesV2={[]} hasImagesV1={false} hasImagesV2={false} />
    </>
  )
}
