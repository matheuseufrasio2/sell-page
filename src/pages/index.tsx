import { motion } from 'framer-motion';
import Head from 'next/head';
import { Footer } from '../components/Footer';
import { SectionAboutMe } from '../components/SectionAboutMe';
import { SectionFaq } from '../components/SectionFaq';
import { SectionHowItWorks } from '../components/SectionHowItWorks';
import { SectionSell } from '../components/SectionSell';
import styles from '../styles/pages/home.module.scss';

export default function Home() {
  function scrollToSectionSell() {
    var element = document.getElementById("compre-aqui");
    element.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className={styles.homeContainer}>
    <Head>
      <title>Social Media Pocket</title>
    </Head>
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
      <motion.button
        onClick={scrollToSectionSell}
        whileHover={{
          scale: [1, 1.1],
          transition: { duration: 0.5, loop: Infinity },
        }}
      >
        Quero assinar o plano
      </motion.button>
    </motion.section>
    <SectionAboutMe />
    <SectionHowItWorks />
    <SectionSell />
    <SectionFaq />
    <Footer />
    </main>
  )
}
