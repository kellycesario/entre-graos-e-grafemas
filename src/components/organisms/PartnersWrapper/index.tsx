import { v4 as uuidv4 } from 'uuid'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import { CardPartner } from '@/molecules/CardPartner'
import styles from './styles.module.scss'

interface PartnersWrapperProps {
  title?: string
  text?: string
}

export const PartnersWrapper = ({ title, text }: PartnersWrapperProps) => {
  const id = uuidv4()

  return (
    <section aria-labelledby={id} className={styles.partners}>
      <div className={styles.partners__heading}>
        <Heading color="cordovan" level="2" weight="700" id={id}>
          {title}
        </Heading>
        <Text>{text}</Text>
      </div>
      <div className={styles.partners__cards}>
        <CardPartner
          name="Nome"
          role="Papel"
          description="Descrição"
          image="https://plus.unsplash.com/premium_photo-1675074446586-c59729d5056d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardPartner
          name="Nome"
          role="Papel"
          description="Descrição"
          image="https://plus.unsplash.com/premium_photo-1675074446586-c59729d5056d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardPartner
          name="Nome"
          role="Papel"
          description="Descrição"
          image="https://plus.unsplash.com/premium_photo-1675074446586-c59729d5056d?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  )
}
