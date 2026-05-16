// Componente "SobreMim" para exibir informações sobre o desenvolvedor, incluindo foto, nome, cargo e descrição. O estilo é aplicado usando um módulo CSS específico para este componente.

import style from './sobre.module.css';

const SobreMim = () => {

    return(
        <section className={style.hero} id="sobre">
            <div className={style.heroContainer}>
                <img src="/perfil.webp" alt="Foto de Perfil" className={style.foto_perfil} />
                <p className={style.subtitulo}>Óla eu sou</p>
                <h1 className={style.nome}>Dennis</h1>
                <h2 className={style.cargo}> Desenvolvedor Front-end</h2>
                <p className={style.descricao}>
                     Sou apaixonado por criar interfaces modernas, responsivas e intuitivas.
                     Tenho experiência com HTML, CSS, JavaScript, React e Nextjs, sempre buscando
                     transformar ideias em projetos funcionais e bem apresentados.
                </p>
            </div>
        </section>
        
    )
}
export default SobreMim;