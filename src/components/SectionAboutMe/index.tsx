import { CardAboutMe } from './CardAboutMe';
import styles from './styles.module.scss';

export function SectionAboutMe() {
  return (
    <section className={styles.sectionContainer}>
      <CardAboutMe title="Visibilidade" />
      <CardAboutMe title="Autoridade" />
      <CardAboutMe title="Pacientes" />
    </section>
  )
}
