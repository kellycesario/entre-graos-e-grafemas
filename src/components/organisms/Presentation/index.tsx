'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
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
  const [windowWidth, setWindowWidth] = useState(0)

  const id = uuidv4()

  const headingStyle = [
    styles.presentation__heading,
    styles[`presentation__heading--${backgroundColor}`],
  ].join(' ')

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const getImageDimensions = () => {
    if (windowWidth < 1024) {
      return { width: 1013, height: 226 }
    } else if (windowWidth >= 1024) {
      return { width: 1013, height: 612 }
    } else {
      return { width: 300, height: 300 }
    }
  }

  const { width, height } = getImageDimensions()

  return (
    <section aria-labelledby={id} className={styles.presentation}>
      {image && (
        <Image
          src={image}
          alt={alt}
          width={width}
          height={height}
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
