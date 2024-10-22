interface IconProps {
  Icon: React.ComponentType<{
    color?: string
    size?: number | string
    stroke?: number | string
  }>
  color?: string
  size?: number | string
  stroke?: number | string
}

export const Icon = ({ Icon, color, size, stroke }: IconProps) => {
  return <Icon color={color} size={size} stroke={stroke} />
}
