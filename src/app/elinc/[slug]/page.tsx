import { ArticleHero } from '@/organisms/ArticleHero'
import { ArticleExpanded } from '@/organisms/ArticleExpanded'
import { getEntry } from '@/api/contentful'

export default async function Article() {
  const article = await getEntry('blogPost', 1, false)
  const content = article.contentCollection.items[0].content

  const extractImages = (gallery: any) => {
    return gallery?.mediaCollection?.items.map((image: { media: { url: any }; imageDescription: any }) => ({
      media: image.media.url,
      imageDescription: image.imageDescription,
    })) || []
  }

  const hasImages = (gallery: any) => {
    const images = extractImages(gallery)
    return images.length > 0
  }

  const imagesV1 = extractImages(article.contentCollection.items[0].gallery)
  const imagesV2 = extractImages(article.contentCollection.items[0].galleryV2)
  const hasImagesV1 = hasImages(article.contentCollection.items[0].gallery)
  const hasImagesV2 = hasImages(article.contentCollection.items[0].galleryV2)

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

      <ArticleExpanded
        content={content}
        imagesV1={imagesV1}
        imagesV2={imagesV2}
        hasImagesV1={hasImagesV1}
        hasImagesV2={hasImagesV2}
      />
    </>
  )
}
