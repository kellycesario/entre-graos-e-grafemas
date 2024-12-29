interface IconProps {
  icon: string
  className?: string
  fill?: string
  width?: number
  height?: number
  viewBox?: string
}

export const LocalIcon = ({
  icon,
  className,
  fill,
  width,
  height,
  viewBox,
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox || `0 0 ${width} ${height}`}
      fill={fill}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <use href={`#${icon}`} xlinkHref={`#${icon}`} />
    </svg>
  )
}
