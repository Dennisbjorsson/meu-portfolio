// Componente "Contatos" para exibir informações de contato, como email, telefone e LinkedIn. O estilo é aplicado usando um módulo CSS específico para este componente.

import styles from "./contatos.module.css";

const Contatos = () => {
  return (
    <section className={styles.contatosSection} id="contatos">
      <div className={styles.container}>
        <h2 className={styles.titulo}>Contatos</h2>

        <p className={styles.descricao}>
          Entre em contato comigo através dos canais abaixo.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Email</h3>
            <p>seu.email@dominio.com</p>
          </div>

          <div className={styles.card}>
            <h3>Telefone</h3>
            <p>(11) 1234-5678</p>
          </div>

          <div className={styles.card}>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/seu-perfil</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatos;