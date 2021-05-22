import Image from 'next/image';
import styles from './styles.module.scss';

export function SectionGarantee() {
  return (
    <section className={styles.sectionContainer}>
      <div>
        <Image 
          src="/images/garantee.png"
          alt="Picture of the author"
          width={200}
          height={293}
        />

        <div className={styles.textGarantee}>
          <h1>Satisfação garantida ou seu dinheiro de volta</h1>
          <h3>Nós confiamos tanto no nosso serviço que você terá risco zero em adquiri-lo.</h3>
          <p><strong>Até 7 dias</strong> após a aquisição da assinatura, caso você se arrependa por qualquer motivo, basta nos enviar um único e-mail e nós devolvemos o seu dinheiro.</p>
        </div>
      </div>
    </section>
  )
}
