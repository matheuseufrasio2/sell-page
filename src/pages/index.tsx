import Head from 'next/head';
import { Footer } from '../components/Footer';
import { SectionAboutMe } from '../components/SectionAboutMe';
import { SectionFaq } from '../components/SectionFaq';
import { SectionHowItWorks } from '../components/SectionHowItWorks';
import { SectionSell } from '../components/SectionSell';
import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <main className={styles.homeContainer}>
    <Head>
      <title>Social Media Pocket</title>
    </Head>
    <section className={styles.sectionVideo}>
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
      <a
        href="https://sun.eduzz.com/779754?&utm_source=JOBZZ&utm_medium=Organico&utm_campaign=Link_Checkout"
        target="_blank"
      >Quero assinar o plano</a>
    </section>
    <SectionAboutMe />
    <SectionHowItWorks />
    <SectionSell />
    <SectionFaq />
    <Footer />
    </main>
  )
}
