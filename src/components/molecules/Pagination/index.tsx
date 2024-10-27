'use client'

import { IconArrowRight, IconArrowLeft } from '@tabler/icons-react'
import styles from './styles.module.scss'

interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

export const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage)
    }
  }

  const isPreviousDisabled = currentPage === 1
  const isNextDisabled = currentPage === totalPages

  const previousIconFill = isPreviousDisabled ? '#5C5C5C' : '#FFFFFF'
  const nextIconFill = isNextDisabled ? '#5C5C5C' : '#FFFFFF'

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        aria-label="Página anterior"
        className={`${styles.pagination__button} ${
          isPreviousDisabled ? styles.disabled : styles.active
        }`}
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
        onClick={() => handlePageChange(currentPage + 1)}
        aria-label="Próxima página"
        className={`${styles.pagination__button} ${
          isNextDisabled ? styles.disabled : styles.active
        }`}
        disabled={isNextDisabled}
      >
        <IconArrowRight size={32} color={nextIconFill} stroke={1} />
      </button>
    </div>
  )
}
