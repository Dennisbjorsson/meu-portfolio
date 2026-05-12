// Componente "Habilidades"  exibi as habilidades técnicas que adquiri, como HTML, CSS, JavaScript e React. O estilo é aplicado usando o módulo CSS específico para este componente.

import styles from "./habilidades.module.css";

const habilidades = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
];

const Habilidades = () => {
  return (
    <section className={styles.habilidadesSection} id="habilidades">
      <div className={styles.container}>
        <h2 className={styles.titulo}>Habilidades</h2>

        <p className={styles.descricao}>
          Tecnologias que utilizo para desenvolver interfaces modernas,
          responsivas e funcionais.
        </p>

        <div className={styles.cards}>
          {habilidades.map((habilidade) => (
            <div className={styles.card} key={habilidade}>
              <span>{habilidade}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Habilidades;