import Link from 'next/link'
import styles from './styles.module.scss'
import { Icon as CustomIcon } from '@/ions/Icon'

interface ButtonProps {
  hasIcon?: boolean
  icon?: React.ComponentType<{ color?: string; size?: number; stroke?: number }>
  iconColor?: string
  iconSize?: number
  iconPosition?: 'left' | 'right'
  href?: string
  isButton?: boolean
  aria?: string
  label?: string
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void
  role?: string
  target?: string
  weight?: string
  variant?: string
  secondaryBackgroundColor?: string
  secondaryColor?: string
  secondaryBorderColor?: string
}

export const Button = ({
  hasIcon,
  icon: Icon,
  iconColor,
  iconSize,
  iconPosition,
  href,
  isButton = true,
  aria,
  label,
  onClick,
  role,
  target,
  weight,
  variant,
  secondaryBackgroundColor,
  secondaryColor,
  secondaryBorderColor,
}: ButtonProps) => {
  const buttonStyle = [
    styles.button,
    styles[`button--${iconPosition}`],
    styles[`button--${variant}`],
    variant === 'secondary' && secondaryBackgroundColor
      ? styles[`button--secondary`]
      : '',
  ].join(' ')

  const linkStyle = [
    styles.link,
    styles[`link--${weight}`],
    styles[`link--${iconPosition}`],
    !isButton && variant ? styles[`link--${variant}`] : '',
    variant === 'secondary' && secondaryBackgroundColor
      ? styles[`link--secondary`]
      : '',
    !isButton && !variant && styles[`link--hover`],
  ].join(' ')

  return (
    <>
      {isButton ? (
        <button
          onClick={onClick}
          className={buttonStyle}
          aria-label={aria}
          role={role}
          style={
            variant === 'secondary'
              ? {
                  backgroundColor: secondaryBackgroundColor,
                  color: secondaryColor,
                  borderColor: secondaryBorderColor,
                }
              : {}
          }
        >
          {label}
          {hasIcon && Icon && (
            <CustomIcon Icon={Icon} color={iconColor} size={iconSize} />
          )}
        </button>
      ) : (
        <Link
          href={href ?? ''}
          target={target}
          className={linkStyle}
          role={role}
          onClick={onClick}
          style={
            variant === 'secondary'
              ? {
                  backgroundColor: secondaryBackgroundColor,
                  color: secondaryColor,
                  borderColor: secondaryBorderColor,
                }
              : {}
          }
        >
          {hasIcon && Icon && (
            <CustomIcon Icon={Icon} color={iconColor} size={iconSize} />
          )}
          {label}
        </Link>
      )}
    </>
  )
}
