import { createElement } from 'react'
import styles from './styles.module.scss'

interface HeadingsProps {
  align?: string
  children?: string
  color?: string
  level?: string
  weight?: string
}
export const Heading = ({ align, children, color, level, weight }: HeadingsProps) => {
  const headingStyle = [
    styles.heading,
    styles[`heading--${align}`],
    styles[`heading--${color}`],
    styles[`heading--h${level}`],
    styles[`heading--${weight}`],
  ].join(' ')

  const props = { className: headingStyle }
  const element = createElement('h' + level, props, children)

  return element
}
