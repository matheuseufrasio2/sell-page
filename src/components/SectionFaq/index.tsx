import { SimpleAccordion } from './Accordion';
import styles from './styles.module.scss';

export function SectionFaq() {
  return (
    <section className={styles.sectionContainer}>
      <h1>Dúvidas Frequentes</h1>
      <div className={styles.faqs}>
        <SimpleAccordion />
      </div>
    </section>
  )
}
