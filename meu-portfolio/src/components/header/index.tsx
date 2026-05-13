import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <a href="#home" className={styles.logo_link}>
          <img
            src="/logo.webp"
            alt="Logo do Portfólio"
            className={styles.header_logo}
          />
        </a>

        <nav className={styles.header_nav}>
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#contatos">Contatos</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;