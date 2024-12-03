import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import '@/styles/main.scss'
import { Header } from '@/organisms/Header'
import styles from './layout.module.scss'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Entre grãos e grafemas',
  description: 'Blog - Entre grãos e grafemas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const layoutStyle = [poppins.className, styles.layout].join(' ')
  return (
    <html lang="en">
      <body className={layoutStyle}>
        <Header />
        {children}
      </body>
    </html>
  )
}
