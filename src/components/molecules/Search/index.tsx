import { useSearchParams, usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { IconSearch } from '@tabler/icons-react'
import { Button } from '@/atoms/Button'
import styles from './styles.module.scss'

interface SearchProps {
  mainColor?: string
}

export const Search = ({ mainColor }: SearchProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') ?? '')

  const [previousScrollPosition, setPreviousScrollPosition] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPreviousScrollPosition(window.scrollY)
    }
  }, [searchTerm])

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    window.history.pushState(
      { path: `${pathname}?${params.toString()}` },
      '',
      `${pathname}?${params.toString()}`
    )

    window.scrollTo(0, previousScrollPosition)
  }, 1000)

  const handleButtonClick = () => {
    handleSearch(searchTerm)
  }

  const handleClearSearch = () => {
    setSearchTerm('')
    handleSearch('')
  }

  return (
    <div className={styles.searchContainer}>
      <form
        className={styles.search}
        onSubmit={(e) => e.preventDefault()}
        style={{ borderColor: mainColor }}
      >
        <input
          placeholder="Cognição"
          className={styles.search__input}
          aria-label="Buscar artigo"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <Button
        isButton={true}
        label="Buscar"
        variant="secondary"
        hasIcon={true}
        icon={IconSearch}
        iconColor={mainColor}
        secondaryColor={mainColor}
        onClick={handleButtonClick}
      />
      {searchTerm && (
        <Button
          isButton={true}
          label="Limpar"
          variant="tertiary"
          onClick={handleClearSearch}
        />
      )}
    </div>
  )
}
