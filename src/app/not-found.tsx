import { headers } from 'next/headers'
import styles from './not-found.module.scss'
import { Button } from '@/atoms/Button'
import { Text } from '@/atoms/Text'
import { getLocale } from '@/utils/getLocale/getLocale'
import { notFoundTranslations } from '@/data/translations/not-found'

export interface NotFoundPageProps {
  text?: string
  label?: string
}

export default function NotFoundPage() {
  const requestHeaders = headers()
  const locale = getLocale(requestHeaders) as 'pt-BR' | 'en-US'

  const notFound = notFoundTranslations[locale]
  return (
    <div className={styles.error404}>
      <p className={styles.error404__code}>4 0 4</p>
      <Text align="center">{notFound.text}</Text>
      <Button
        href="/"
        label={notFound.label}
        variant="secondary"
        isButton={false}
        useButtonStyle={true}
        secondaryColor="#1c1c1c"
      />
    </div>
  )
}
