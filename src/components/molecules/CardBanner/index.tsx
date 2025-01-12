import { IconArrowRight } from '@tabler/icons-react'
import { Icon as CustomIcon } from '@/ions/Icon'
import { Button } from '@/atoms/Button'
import styles from './styles.module.scss'

export interface CardProps {
  icon?: React.ComponentType<{
    color?: string
    size?: number | string
    stroke?: number | string
  }>
  link?: string
  label?: string
  secondaryColor?: string
  title?: string
  titleColor?: string
  backgroundColor?: string
  iconColor?: string
}

export const CardBanner = ({
  icon: Icon,
  link,
  label,
  secondaryColor,
  title,
  titleColor,
  backgroundColor,
  iconColor,
}: CardProps) => {
  const cardStyle = [styles.card, styles[`card--${backgroundColor}`]].join(' ')

  const titleStyle = [
    styles.card__title,
    styles[`card__title--${titleColor}`],
  ].join(' ')

  return (
    <article aria-labelledby={title} className={cardStyle}>
      <div aria-hidden="true" className={styles.card__icon}>
        {Icon && <CustomIcon Icon={Icon} color="#FFFFFF" size={24} />}
      </div>
      <p id={title} className={titleStyle}>
        {title}
      </p>
      <Button
        href={link}
        label={label}
        variant="secondary"
        isButton={false}
        useButtonStyle={true}
        secondaryColor={secondaryColor}
        hasIcon={true}
        icon={IconArrowRight}
        iconColor={iconColor}
      />
    </article>
  )
}
