import { ArticleHero } from '@/organisms/ArticleHero'
import { ArticleExpanded } from '@/organisms/ArticleExpanded'
import { getArticle } from '@/api/contentful'
import { extractImages, hasImages } from '@/api/contentfulGlobalFunctions'

interface ArticleProps {
  params: { slug: string }
}

export default async function Article({ params }: Readonly<ArticleProps>) {
  const article = await getArticle('blogPost', params.slug)
  const items = article.contentCollection?.items || []

  return (
    <main>
      <ArticleHero
        title={article.title}
        author={article.author}
        date={article.date}
        image={article.image?.url}
        alt={article.image?.imageDescription}
      />

      {items.map((item: any, index: number) => {
        const content = item.content || {}
        const galleryTypeName = item.gallery ? item.gallery.__typename : null
        const imagesV1 =
          galleryTypeName === 'GalleryV1' ? extractImages(item.gallery) : []
        const imagesV2 =
          galleryTypeName === 'GalleryV2' ? extractImages(item.gallery) : []

        return (
          <section key={index + 1}>
            <ArticleExpanded
              content={content}
              imagesV1={imagesV1}
              imagesV2={imagesV2}
              hasImagesV1={hasImages(item.gallery)}
              hasImagesV2={hasImages(item.gallery)}
            />
          </section>
        )
      })}
    </main>
  )
}
