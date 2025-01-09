import '@/styles/main.scss'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { Poppins } from 'next/font/google'
import { Sprites } from '@/ions/Sprites'
import { Header } from '@/organisms/Header'
import { getLocale } from '@/utils/getLocale/getLocale'
import { navigation } from '@/data/translations/layout'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Entre grãos e grafemas',
  description:
    'Um blog dedicado ao estudo da Linguística, com artigos e reflexões sobre aquisição de linguagem, sintaxe, fonética, fonologia e outros temas essenciais para entender os fenômenos da linguagem humana.',
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
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Header locale={locale} navigationItems={navigationItems} />
        {children}
        <Sprites />
      </body>
    </html>
  )
}
