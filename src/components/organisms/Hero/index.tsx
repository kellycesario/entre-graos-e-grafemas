import { Text } from '@/atoms/Text'
import { Button } from '@/atoms/Button'
import { Heading } from '@/atoms/Heading'
import styles from './styles.module.scss'
import { IconArrowRight, IconCoffee } from '@tabler/icons-react'
import { Breadcrumb, BreadcrumbItem } from '@/atoms/Breadcrumb'

interface HeroProps {
  title?: string
  text?: string
  video?: string
  hasBreadcrumb?: boolean
  items?: BreadcrumbItem[]
}

export const Hero = ({
  title,
  text,
  video,
  hasBreadcrumb = true,
  items,
}: HeroProps) => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__heading}>
        {hasBreadcrumb && items && items.length > 0 && (
          <Breadcrumb items={items} />
        )}

        <Heading align="left" color="cordovan" level="1" weight="800">
          {title}
        </Heading>
        <Text align="left" color="gunmetal" weight="400">
          {text} &nbsp;
          <IconCoffee color="#481620" />
        </Text>
        <div className={styles.hero__buttons}>
          <Button
            hasIcon={true}
            icon={IconArrowRight}
            iconColor="white"
            iconSize={24}
            iconPosition="right"
            href=""
            label="Explore projetos"
            variant="primary"
          />
          <Button href="" label="Entre em contato" variant="secondary" />
        </div>
      </div>
      <video autoPlay loop className={styles.hero__video}>
        <source src={video} type="video/mp4" />
      </video>
    </section>
  )
}
