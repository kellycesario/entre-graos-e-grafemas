import Image from 'next/image'
import styles from './not-found.module.scss'
import { Button } from '@/atoms/Button'
import { Text } from '@/atoms/Text'

export default function NotFoundPage() {
  return (
    <div className={styles.error404}>
      <Text>Parece que a página que você buscou não existe.</Text>
      <Text>Que tal pegar um cafézinho e tentar novamente?</Text>

      <Image src="/images/404.png" alt="" width={471} height={318.88} />
      <Button href="/" label="Voltar para o início" variant="primary" />
      <p></p>
    </div>
  )
}
