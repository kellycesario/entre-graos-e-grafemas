import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { getArticle } from '@/api/contentful'
import { extractImages, hasImages } from '@/api/contentfulGlobalFunctions'
import { ArticleHero } from '@/organisms/ArticleHero'
import { ArticleExpanded } from '@/organisms/ArticleExpanded'
import { Footer } from '@/organisms/Footer'
import { getLocale } from '@/utils/getLocale/getLocale'
import { navigation } from '@/data/translations/layout'

interface ArticleProps {
  params: { slug: string }
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({
  params,
}: ArticleProps): Promise<Metadata> {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'
  const article = await getArticle('blogPost', params.slug, 1, false, locale)
  const pageTitle = `${article.title} - Blog | Research`
  const pageDescription = `${article.description.substring(0, 160)}`

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: article.tag,
    authors: [{ name: article.author }],
  }
}

export default async function Article({ params }: Readonly<ArticleProps>) {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'
  const navigationItems = navigation[locale]

  const article = await getArticle('blogPost', params.slug, 1, false, locale)
  const items = article.contentCollection?.items || []

  return (
    <>
      <main>
        <ArticleHero
          title={article.title}
          author={article.author}
          date={article.date}
          image={article.image?.url}
          alt={article.imageDescription}
          locale={locale}
        />

        {items.map((item: any, index: number) => {
          const content = item.content || {}
          const galleryTypeName = item.gallery ? item.gallery.__typename : null
          const imagesV1 =
            galleryTypeName === 'GalleryV1' ? extractImages(item.gallery) : []
          const imagesV2 =
            galleryTypeName === 'GalleryV2' ? extractImages(item.gallery) : []

          return (
            <section key={index + 1} aria-labelledby={article.title}>
              <ArticleExpanded
                content={content}
                imagesV1={imagesV1}
                imagesV2={imagesV2}
                hasImagesV1={hasImages(item.gallery)}
                hasImagesV2={hasImages(item.gallery)}
                locale={locale}
              />
            </section>
          )
        })}
      </main>
      <Footer
        hasCTA={true}
        backgroundImage="/images/coffee/9.png"
        backgroundColor="#8c4949"
        navigationItems={navigationItems}
        locale={locale}
      />
    </>
  )
}
