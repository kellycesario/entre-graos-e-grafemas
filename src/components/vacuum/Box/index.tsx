import { ReactNode } from 'react'
import styles from './styles.module.scss'

interface BoxProps {
  children?: ReactNode
  color?: string
  backgroundColor?: string
}

export const Box = ({
  children,
  backgroundColor,
  color = 'white',
}: BoxProps) => {
  const boxStyle = [
    styles.box,
    styles[`box--${backgroundColor}`],
    styles[`box--${color}`],
  ].join(' ')
  return <div className={boxStyle}>{children}</div>
}
