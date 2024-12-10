import Image from 'next/image'

interface ImageProps {
  alt: string
  className?: string
  src: string
}
export const ImageWrapper = ({ src, className, alt }: ImageProps) => {
  return (
    <Image src={src} alt={alt} width={450} height={450} className={className} />
  )
}
