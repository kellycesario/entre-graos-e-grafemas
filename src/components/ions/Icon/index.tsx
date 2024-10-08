interface IconProps {
  Icon: React.ComponentType<{
    color?: string
    size?: number
    stroke?: number
  }>
  color?: string
  size?: number
  stroke?: number
}

export const Icon = ({ Icon, color, size, stroke }: IconProps) => {
  return <Icon color={color} size={size} stroke={stroke} />
}
