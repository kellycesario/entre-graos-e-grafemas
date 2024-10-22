import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface TextProps {
  align?: string
  children?: ReactNode
  color?: string
  weight?: string
}
export const Text = ({
  align = 'left',
  children,
  color = 'gunmetal',
  weight = '400',
}: TextProps) => {
  const textStyle = [
    styles[`text`],
    styles[`text--${align}`],
    styles[`text--${color}`],
    styles[`text--${weight}`],
  ].join(' ')

  return <p className={textStyle}>{children}</p>
}
