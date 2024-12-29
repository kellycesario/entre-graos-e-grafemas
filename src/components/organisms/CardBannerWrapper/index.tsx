import { IconPencil, IconHeartHandshake } from '@tabler/icons-react'
import { CardBanner } from '@/molecules/CardBanner'
import styles from './styles.module.scss'

export const CardBannerWrapper = () => {
  return (
    <section className={styles.cards}>
      <CardBanner
        icon={IconPencil}
        link="/sobre-mim"
        title="Quer saber mais sobre mim?"
        titleColor="white"
        label="Sobre mim"
        secondaryColor="white"
        backgroundColor="gunmetal"
        iconColor="white"
      />
      <CardBanner
        icon={IconHeartHandshake}
        link="/parcerias"
        title="Quer saber mais sobre minhas parcerias?"
        titleColor="dim-gray"
        label="Parcerias"
        secondaryColor="#5C6B6B"
        backgroundColor="white"
        iconColor="#5C6B6B"
      />
    </section>
  )
}
