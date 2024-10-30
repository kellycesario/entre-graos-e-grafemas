import { v4 as uuidv4 } from 'uuid'
import { Icon as CustomIcon } from '@/ions/Icon'
import { Heading } from '@/atoms/Heading'
import { Text } from '@/atoms/Text'
import { CardArticle } from '@/molecules/CardArticle'
import mock from '@/data/mock.json'
import styles from './styles.module.scss'

interface CardArticleWrapperProps {
  icon?: React.ComponentType<{
    color?: string
    size?: number | string
    stroke?: number | string
  }>
  title?: string
  text?: string
  project: 'elinc' | 'alegria' | 'pesquisas'
}

export const CardArticleWrapper = ({
  icon: Icon,
  project,
  title,
  text,
}: CardArticleWrapperProps) => {
  const articles = mock[project] || []

  const id = uuidv4()

  return (
    <section className={styles.cards} aria-labelledby={id}>
      <div className={styles.cards__heading}>
        <Heading color="cordovan" level="2" weight="700" id={id}>
          {title}
        </Heading>
        <Text>
          {text}
          {Icon && (
            <CustomIcon
              Icon={Icon}
              color="#481620"
              size={24}
              className={styles.cards__icon}
            />
          )}
        </Text>
      </div>
      <div className={styles.cards__articles}>
        {articles.map(({ image, tag, title, text, link }, index) => (
          <CardArticle
            key={title}
            image={image}
            tag={tag}
            title={title}
            text={text}
            link={link}
            project={project}
            className={index === 0 ? styles.firstCard : undefined}
          />
        ))}
      </div>
    </section>
  )
}
