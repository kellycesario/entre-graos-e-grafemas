import styles from './not-found.module.scss'
import { Button } from '@/atoms/Button'
import { Text } from '@/atoms/Text'

export default function NotFoundPage() {
  return (
    <div className={styles.error404}>
      <p className={styles.error404__code}>4 0 4</p>
      <Text align="center">Parece que a página que você buscou não existe</Text>
      <Button
        href="/"
        label="Voltar para o início"
        variant="secondary"
        isButton={false}
        useButtonStyle={true}
        secondaryColor="#1c1c1c"
      />
    </div>
  )
}
