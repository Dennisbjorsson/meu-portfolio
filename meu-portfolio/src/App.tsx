import { CardPortfolio } from "./components/projetos/CardPortfolio";
import Habilidades from "./components/habilidades/habilidades";
import SobreMim from "./components/sobre-mim/sobre";
import Header from "./components/header";
import  { projetos } from "./libs/portfolio";
import Contatos from "./components/contatos/contatos";
import  Footer from "./components/footer";
import './App.css';

function App() {
  

  return (
    <section id="home">

      <Header />
      <SobreMim />
      <CardPortfolio portfolios={projetos} />
      <Habilidades />
      <Contatos />
    <Footer />  

    </section>
  )
}

export default App
