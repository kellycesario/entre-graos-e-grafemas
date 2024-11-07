import { createElement } from 'react'
import styles from './styles.module.scss'

interface HeadingsProps {
  align?: string
  children?: string
  color?: string
  level?: string
  weight?: string
  id?: string
  className?: string
}
export const Heading = ({
  align,
  children,
  color,
  level,
  weight,
  id,
  className,
}: HeadingsProps) => {
  const headingStyle = [
    styles.heading,
    styles[`heading--${align}`],
    styles[`heading--${color}`],
    styles[`heading--h${level}`],
    styles[`heading--${weight}`],
    className,
  ].join(' ')

  const props = { className: headingStyle, id }
  const element = createElement('h' + level, props, children)

  return element
}
