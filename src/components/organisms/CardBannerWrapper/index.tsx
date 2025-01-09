import { CardBanner, CardProps } from '@/molecules/CardBanner'
import styles from './styles.module.scss'

export interface CardBannerWrapperProps {
  cardData: CardProps[]
}

export const CardBannerWrapper = ({ cardData }: CardBannerWrapperProps) => {
  return (
    <section className={styles.cards}>
      {cardData.map((card) => (
        <CardBanner key={card.title} {...card} />
      ))}
    </section>
  )
}
