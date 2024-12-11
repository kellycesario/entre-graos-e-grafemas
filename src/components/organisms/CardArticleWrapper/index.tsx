'use client'

import { useState } from 'react'
import { useSearchParams, usePathname } from 'next/navigation'
import { v4 as uuidv4 } from 'uuid'
import { IconBrain, IconBooks, IconLayoutGridAdd } from '@tabler/icons-react'
import { Icon as CustomIcon } from '@/ions/Icon'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import { Search } from '@/molecules/Search'
import { CardArticle } from '@/molecules/CardArticle'
import { Pagination } from '@/molecules/Pagination'
import mock from '@/data/mock.json'
import styles from './styles.module.scss'
interface CardArticleWrapperProps {
  title?: string
  text?: string
  project: 'elinc' | 'alegria' | 'pesquisas'
  totalPages: number
}

export const CardArticleWrapper = ({
  project,
  title,
  text,
  totalPages,
}: CardArticleWrapperProps) => {
  const articles = mock[project] || []
  const searchParams = useSearchParams()
  const searchQuery = searchParams?.get('query')?.toLowerCase() ?? ''

  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery) ||
      article.text.toLowerCase().includes(searchQuery)
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

      <Search />

      <div className={styles.cards__articles}>
        {paginatedData.map(({ image, tag, title, text, link }, index) => (
          <CardArticle
            key={title}
            image={image}
            tag={tag}
            title={title}
            text={text}
            link={link}
            project={project}
            className={index === 0 ? styles.firstCard : undefined}
          />
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        paginationColor={paginationColor}
      />
    </section>
  )
}
