import Head from 'next/head';
import { Footer } from '../components/Footer';
import { SectionAboutMe } from '../components/SectionAboutMe';
import { SectionFaq } from '../components/SectionFaq';
import { SectionGarantee } from '../components/SectionGarantee';
import { SectionHowItWorks } from '../components/SectionHowItWorks';
import { SectionSell } from '../components/SectionSell';
import { SectionVideo } from '../components/SectionVideo';
import styles from '../styles/pages/home.module.scss';

export default function Home() {
  return (
    <main className={styles.homeContainer}>
    <Head>
      <title>Social Media Pocket</title>
    </Head>
    <SectionVideo />
    <SectionAboutMe />
    <SectionHowItWorks />
    <SectionSell />
    <SectionGarantee />
    <SectionFaq />
    <Footer />
    </main>
  )
}
