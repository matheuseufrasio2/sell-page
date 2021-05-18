import styles from './styles.module.scss';
import { BiPlusMedical } from 'react-icons/bi'

interface CardAboutMeProps {
  title: string;
}

export function CardAboutMe({ title }: CardAboutMeProps) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle}>
        <BiPlusMedical />
        <h2>{title}</h2>
      </div>
      <div className={styles.cardContent}></div>
    </div>
  )
}
