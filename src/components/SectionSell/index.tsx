import styles from './styles.module.scss';

export function SectionSell() {
  return (
    <section className={styles.sectionContainer}>
      <h1 id="compre-aqui">Conheça nosso plano</h1>
      <div className={styles.ourPlan}>
        <ul>
          <li>DE R$ 297 POR R$247/MÊS</li>
          <li>PARCELE EM ATÉ 12X NO PRIMEIRO MÊS</li>
          <li>12 POSTAGENS COMPLETAS /MÊS</li>
          <li>TEMAS ESCOLHIDOS POR VOCÊ</li>
          <li>IDENTIDADE VISUAL PERSONALIZADA</li>
          <li>TEXTO ELABORADO SOBRE CADA TEMA</li>
          <li>IMAGEM COM TAMANHO IDEAL PARA REDES SOCIAIS</li>
          <li>ORTOGRAFIA IMPECÁVEL</li>
          <li>RECEBA TUDO POR E-MAIL E EM ALTA QUALIDADE</li>
          <li>ATENDIMENTO DE SEGUNDA A SEXTA DE 08 ÀS 17 HORAS</li>
          <li>SUPORTE VIA WHATSAPP E E-MAIL</li>
          <li>CANCELE ASSINATURA QUANDO QUISER</li>
        </ul>
      </div>

      <a
        href="https://sun.eduzz.com/779754?&utm_source=JOBZZ&utm_medium=Organico&utm_campaign=Link_Checkout"
        target="_blank"
      >Quero assinar o plano</a>
    </section>
  )
}
