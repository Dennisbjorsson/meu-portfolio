import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          &copy; 2026 Meu Portfólio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;