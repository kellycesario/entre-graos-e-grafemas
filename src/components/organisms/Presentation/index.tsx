import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import { LocalIcon } from '@/ions/LocalIcon'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import styles from './styles.module.scss'

interface PresentationProps {
  alt: string
  backgroundColor?: 'cordovan' | 'light-blue' | 'dim-gray'
  image?: string
  title?: string
  text?: string
}

export const Presentation = ({
  alt,
  backgroundColor,
  image,
  title,
  text,
}: PresentationProps) => {
  const id = uuidv4()

  const headingStyle = [
    styles.presentation__heading,
    styles[`presentation__heading--${backgroundColor}`],
  ].join(' ')

  return (
    <section aria-labelledby={id} className={styles.presentation}>
      {image && (
        <Image
          src={image}
          alt={alt}
          width={360}
          height={226}
          className={styles.presentation__image}
        />
      )}

      <div className={headingStyle}>
        <div className={styles.presentation__title}>
          <Heading color="white" level="2" weight="700" id={id}>
            {title}
          </Heading>
          <LocalIcon icon="line" width={72} height={8} fill="white" />
        </div>
        <Text color="white"> {text} </Text>
      </div>
    </section>
  )
}
