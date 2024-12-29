'use client'

import { useSearchParams, usePathname } from 'next/navigation'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { IconBrain, IconBooks, IconLayoutGridAdd } from '@tabler/icons-react'
import { Icon as CustomIcon } from '@/ions/Icon'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import { Search } from '@/molecules/Search'
import { CardArticle, CardProps } from '@/molecules/CardArticle'
import { Pagination } from '@/molecules/Pagination'
import styles from './styles.module.scss'

interface CardArticleWrapperProps {
  title?: string
  text?: string
  totalPages: number
  articles: CardProps[]
  mainColor?: string
}

export const CardArticleWrapper = ({
  title,
  text,
  totalPages,
  articles,
  mainColor,
}: CardArticleWrapperProps) => {
  const searchParams = useSearchParams()
  const searchQuery = searchParams?.get('query')?.toLowerCase() ?? ''

  const filteredArticles = articles.filter(
    (article) =>
      article.title?.toLowerCase().includes(searchQuery) ||
      article.description?.toLowerCase().includes(searchQuery) ||
      article.tag?.toLowerCase().includes(searchQuery)
  )

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = Math.min(startIndex + itemsPerPage, filteredArticles.length)
  const paginatedData = filteredArticles.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const id = uuidv4()

  const pathname = usePathname()

  let dynamicIcon = null
  let paginationColor = ''

  if (pathname === '/elinc') {
    dynamicIcon = IconBrain
    paginationColor = '#8c4949'
  } else if (pathname === '/alegria') {
    dynamicIcon = IconBooks
    paginationColor = '#177f9c'
  } else if (pathname === '/pesquisas') {
    dynamicIcon = IconLayoutGridAdd
    paginationColor = '#5c6b6b'
  }

  return (
    <section className={styles.cards} aria-labelledby={id}>
      <div className={styles.cards__heading}>
        <Heading color="cordovan" level="2" weight="700" id={id}>
          {title}
        </Heading>
        <Text>
          {text}
          {dynamicIcon && (
            <CustomIcon
              Icon={dynamicIcon}
              color="#481620"
              size={24}
              className={styles.cards__icon}
            />
          )}
        </Text>
      </div>

      <Search mainColor={mainColor} />

      <div className={styles.cards__articles}>
        {paginatedData.map((article: CardProps, index) => (
          <CardArticle
            key={article.title}
            image={article.image}
            tag={article.tag}
            title={article.title}
            description={article.description}
            slug={article.slug}
            project={article.project}
            className={index === 0 ? styles.firstCard : undefined}
          />
        ))}
      </div>
      {totalPages >= 1 && (
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          paginationColor={paginationColor}
        />
      )}
    </section>
  )
}
