import { RiInstagramLine, RiFacebookLine, RiYoutubeLine, RiCopyrightLine } from 'react-icons/ri';
import styles from './styles.module.scss';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footerContainer}>
      <h1>Larissa Silberman</h1>
      <div className={styles.socialMedias} >
        <a href="#">
          <RiInstagramLine />
        </a>
        <a href="#">
          <RiFacebookLine />
        </a>
        <a href="#">
          <RiYoutubeLine />
        </a>
      </div>
      <div className={styles.copy}>
        <RiCopyrightLine />
        <span>{year}</span>
        <p>Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
