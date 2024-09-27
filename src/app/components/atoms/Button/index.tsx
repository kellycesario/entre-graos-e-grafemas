import Link from 'next/link'
import styles from './styles.module.scss'
import { Icon as CustomIcon } from '@/ions/Icon'

interface ButtonProps {
  aria?: string
  color?: string
  hasIcon?: boolean
  href?: string
  icon?: React.ComponentType<{ color?: string; size?: number; stroke?: number }>
  isButton?: boolean
  label?: string
  level?: string
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>
  ) => void
  role?: string
  size?: number
  target?: string
  weight?: string
}

export const Button = ({
  aria,
  color,
  hasIcon,
  href,
  icon: Icon,
  isButton = true,
  label,
  level,
  onClick,
  role,
  size,
  target,
  weight,
}: ButtonProps) => {
  const buttonStyle = [styles.button, styles[`button--${level}`]].join(' ')

  const linkStyle = [
    styles.link,
    styles[`link--${weight}`],
    !isButton && level ? styles[`link--${level}`] : '',
    !isButton && !level && styles[`link--hover`],
  ].join(' ')

  return (
    <>
      {isButton ? (
        <button
          onClick={onClick}
          className={buttonStyle}
          aria-label={aria}
          role={role}
        >
          {label}
          {hasIcon && Icon && (
            <CustomIcon Icon={Icon} color={color} size={size} />
          )}
        </button>
      ) : (
        <Link
          href={href ?? ''}
          target={target}
          className={linkStyle}
          role={role}
          onClick={onClick}
        >
          {hasIcon && Icon && (
            <CustomIcon Icon={Icon} color={color} size={size} />
          )}
          {label}
        </Link>
      )}
    </>
  )
}
