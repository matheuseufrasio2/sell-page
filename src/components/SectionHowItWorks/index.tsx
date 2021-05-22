import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export function SectionHowItWorks() {
  return (
    <motion.section
      className={styles.sectionContainer}
      initial={{ opacity: 0, x: 1000000 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <h1>Como isso funciona?</h1>
    </motion.section>
  )
}
