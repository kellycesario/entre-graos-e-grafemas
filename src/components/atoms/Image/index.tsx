import Image from 'next/image'

interface ImageProps {
  imageDescription: string
  className?: string
  media: string
  width?: number
  height?: number
}
export const ImageWrapper = ({
  media,
  className,
  imageDescription,
  width,
  height,
}: ImageProps) => {
  return (
    <Image
      src={media}
      alt={imageDescription}
      width={width}
      height={height}
      className={className}
    />
  )
}
