// Cards com os projetos do portfólio, utilizando os dados do arquivo portfolio.ts

import type {portfolios} from "../../types/types";
import styles from "./card.module.css";

type Props ={
    portfolios: portfolios[]
}


export function CardPortfolio({portfolios}: Props) {

    return (
       <section className={styles.section} id="projetos">
        <h2 className={styles.title}>Portfolios</h2>
        
       <div className={styles.cards}>
            
               
                {portfolios.map((portfolio) => (
                    <div className={styles.card} key={portfolio.id}>
                        <img src="/perfil.webp" alt="Portfolio Image" className={styles.imagemCard} />
                        
                        <p className={styles.descricaoCard}>{portfolio.descricao}</p>

                            <a href={portfolio.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                Ver no GitHub
                            </a>
                        
                    </div>
                ))}
            

        </div>
        </section>
    )
}
