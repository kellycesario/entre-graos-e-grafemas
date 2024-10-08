import styles from './styles.module.scss'

interface TagProps {
  backgroundColor?: string
  children?: string
  color?: string
  hasBackgroundColor?: boolean
}

export const Tag = ({
  backgroundColor,
  children,
  color,
  hasBackgroundColor,
}: TagProps) => {
  const divStyle = [
    styles.tag,
    hasBackgroundColor ? styles[`tag--${backgroundColor}`] : '',
  ].join(' ')

  const tagStyle = [styles.tag__text, styles[`tag__text--${color}`]].join(' ')

  return (
    <div className={divStyle}>
      <p className={tagStyle}>{children}</p>
    </div>
  )
}
