import { motion } from 'framer-motion';
import styles from './styles.module.scss';

export function SectionSell() {
  return (
    <section className={styles.sectionContainer}>
      <h1 id="compre-aqui">Conheça nosso plano</h1>
      <div className={styles.ourPlan}>
        <header>
          <p className={styles.oldPrice}>de R$297</p>
          <p className={styles.newPrice}>R$247<span>/mês</span></p>
          <p className={styles.dividePrice}>Parcele em até 12x no primeiro mês</p>
        </header>
        <ul>
          <li>12 postagens completas /mês</li>
          <li>Temas escolhidos por você</li>
          <li>Identidade visual personalizada</li>
          <li>Texto elaborado sobre cada tema</li>
          <li>Imagem com tamanho ideal para redes sociais</li>
          <li>Ortografia Impecável</li>
          <li>Receba tudo por e-mail e em alta qualidade</li>
          <li>Atendimento de segunda a sexta de 08:00h às 17:00h</li>
          <li>Suporte via Whatsapp e e-mail</li>
          <li>Cancele assinatura quando quiser</li>
        </ul>
      </div>

      <motion.a
        href="https://sun.eduzz.com/779754?&utm_source=JOBZZ&utm_medium=Organico&utm_campaign=Link_Checkout"
        target="_blank"
        whileHover={{
          scale: [1, 1.1],
          transition: { duration: 0.5, loop: Infinity },
        }}
      >
        Quero assinar o plano
      </motion.a>
    </section>
  )
}
