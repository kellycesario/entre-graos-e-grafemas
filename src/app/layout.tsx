import '@/styles/main.scss'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Poppins } from 'next/font/google'
import { Sprites } from '@/ions/Sprites'
import { Header } from '@/organisms/Header'
import { getLocale } from '@/utils/getLocale/getLocale'
import { navigation, metadataTranslations } from '@/data/translations/layout'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'
  const metadata = metadataTranslations[locale]

  return {
    title: metadata.title,
    description: metadata.description,
    authors: [{ name: 'Arabie Bezri Hermont' }],
    creator: 'Arabie Bezri Hermont',
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: 'https://arabie-bezri-hermont.vercel.app/',
      images: [
        {
          url: '/images/thumb.png',
          alt: '',
        },
      ],
      type: 'website',
    },
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'
  const navigationItems = navigation[locale]

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <Header locale={locale} navigationItems={navigationItems} />
        {children}
        <Sprites />
      </body>
    </html>
  )
}
