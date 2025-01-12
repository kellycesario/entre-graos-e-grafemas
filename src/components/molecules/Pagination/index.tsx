'use client'

import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react'
import styles from './styles.module.scss'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  paginationColor?: string
  locale?: 'pt-BR' | 'en-US'
}

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  paginationColor,
  locale,
}: PaginationProps) => {
  const handlePageChange = (newPage: number, event: React.MouseEvent) => {
    event.preventDefault()
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage)
      setTimeout(() => {
        window.scrollTo({
          top: 1150,
          left: 0,
          behavior: 'smooth',
        })
      }, 0)
    }
  }
  const isPreviousDisabled = currentPage === 1
  const isNextDisabled = currentPage === totalPages

  const previousIconFill = isPreviousDisabled ? '#5C5C5C' : '#FFFFFF'
  const nextIconFill = isNextDisabled ? '#5C5C5C' : '#FFFFFF'

  const leftButtonBackgroundColor = isPreviousDisabled
    ? '#FFFFFF'
    : paginationColor

  const rightButtonBackgroundColor = isNextDisabled
    ? '#FFFFFF'
    : paginationColor

  const translations = {
    'pt-BR': {
      previous: 'Página anterior',
      next: 'Próxima página',
      noPrevious: 'Nenhuma página anterior',
      noNext: 'Nenhuma página seguinte',
    },
    'en-US': {
      previous: 'Previous page',
      next: 'Next page',
      noPrevious: 'No previous page',
      noNext: 'No next page',
    },
  }

  const getAriaLabel = (type: 'previous' | 'next') => {
    if (type === 'previous') {
      return isPreviousDisabled
        ? translations[locale!].noPrevious
        : translations[locale!].previous
    }
    return isNextDisabled
      ? translations[locale!].noNext
      : translations[locale!].next
  }

  return (
    <div className={styles.pagination}>
      <button
        onClick={(event) => handlePageChange(currentPage - 1, event)}
        aria-label={getAriaLabel('previous')}
        className={`${styles.pagination__button} ${isPreviousDisabled ? styles.disabled : styles.active}`}
        style={{ backgroundColor: leftButtonBackgroundColor }}
        disabled={isPreviousDisabled}
      >
        <IconArrowLeft size={32} color={previousIconFill} stroke={1} />
      </button>

      <div
        aria-label={`${currentPage} of ${totalPages}`}
        className={styles.pagination__current}
      >
        {currentPage}
      </div>

      <button
        onClick={(event) => handlePageChange(currentPage + 1, event)}
        aria-label={getAriaLabel('next')}
        className={`${styles.pagination__button} ${isNextDisabled ? styles.disabled : styles.active}`}
        disabled={isNextDisabled}
        style={{ backgroundColor: rightButtonBackgroundColor }}
      >
        <IconArrowRight size={32} color={nextIconFill} stroke={1} />
      </button>
    </div>
  )
}
