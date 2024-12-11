'use client'

import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react'
import styles from './styles.module.scss'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
  paginationColor?: string
}

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
  paginationColor,
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

  return (
    <div className={styles.pagination}>
      <button
        onClick={(event) => handlePageChange(currentPage - 1, event)}
        aria-label="Página anterior"
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
        aria-label="Próxima página"
        className={`${styles.pagination__button} ${isNextDisabled ? styles.disabled : styles.active}`}
        disabled={isNextDisabled}
        style={{ backgroundColor: rightButtonBackgroundColor }}
      >
        <IconArrowRight size={32} color={nextIconFill} stroke={1} />
      </button>
    </div>
  )
}
