import { v4 as uuidv4 } from 'uuid'
import Image from 'next/image'
import styles from './styles.module.scss'
import columnsData from '@/data/columnsData.json'

export const Animation = () => {
  return (
    <div className={styles.animation}>
      {columnsData.map((column, columnIndex) => (
        <div
          key={uuidv4()}
          className={[
            styles.animation__columns,
            styles[`animation__column${columnIndex + 1}`],
          ].join(' ')}
        >
          {column.map((image) => (
            <Image
              key={uuidv4()}
              src={image.src}
              alt={image.alt}
              className={styles.animation__image}
              width={178}
              height={214}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
