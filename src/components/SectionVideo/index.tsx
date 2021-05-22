import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export function SectionVideo() {
  function scrollToSectionSell() {
    var element = document.getElementById("compre-aqui");
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <motion.section
      className={styles.sectionVideo}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>Atraia mais pacientes para o seu consultório através das redes sociais</h1>
      <div className={styles.videoOnComputer}>
        <iframe 
          width="600"
          height="338"
          src="https://www.youtube.com/embed/bo_efYhYU2A?list=RDbo_efYhYU2A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
      <div className={styles.videoOnCellPhone}>
        <iframe 
          width="600"
          height="338"
          src="https://www.youtube.com/embed/bo_efYhYU2A?list=RDbo_efYhYU2A"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        />
      </div>
    </motion.section>
  )
}
