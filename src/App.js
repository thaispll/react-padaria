import './App.css';

// 1. IMPORTAÇÃO DIRETA DE TODAS AS IMAGENS
// Assumindo que você moveu todas as imagens para a pasta 'src/assets/'
import usuarioIcone from './assets/usuario.png';
import carrinhoIcone from './assets/carrinho.png';
import paoImagem from './assets/pao.jpg';
import boloImagem from './assets/bolo.jpg';
import chocolateImagem from './assets/chocolate.jpg';
import ovosMexidosImagem from './assets/ovos-mexidos.jpg';
import setaIcone from './assets/seta.png';
import lupa2Icone from './assets/lupa(2).png';
import lupaIcone from './assets/lupa.png';


function App() {
  return (
    <div className="container">

      {/* HEADER */}
      <div className="header">
        <img
          className="icone"
          src={usuarioIcone} // Usando a variável importada
          alt="Usuário"
        />

        <h1>PÃO QUENTINHO</h1>

        <img
          className="icone"
          src={carrinhoIcone} // Usando a variável importada
          alt="Carrinho"
        />
      </div>

      {/* IMAGEM PRINCIPAL DA PADARIA REMOVIDA: AGORA É APENAS BACKGROUND NO CSS */}
      
      {/* PROMOÇÕES */}
      <p className="titulo-secao">PROMOÇÕES DO DIA</p>

      <div className="promocoes">
        <div className="card">
          <img src={paoImagem} alt="Pão fresquinho" />
          <p>PÃO FRANCÊS   
 R$0,65</p>
        </div>
        <div className="card">
          <img src={boloImagem} alt="Bolo fresquinho" />
          <p>BOLO DE FUBÁ   
 R$7,50</p>
        </div>
        <div className="card">
          <img src={chocolateImagem} alt="Chocolate" />
          <p>CHOCOLATE   
 R$9,50</p>
        </div>
        <div className="card">
          <img src={ovosMexidosImagem} alt="ovos" />
          <p>OVOS-MEXIDOS   
 R$11,50</p>
        </div>
      </div>

      <hr className="linha" />
      <img className="seta" src={setaIcone} alt="Seta" />

      {/* BARRA DE PESQUISA */}
      <div className="search-container">
        <img className="lupa" src={lupa2Icone} alt="Buscar" />
        <input
          className="pesquisa"
          type="text"
          placeholder="Digite para buscar..."
        />
        <img className="lupa" src={lupaIcone} alt="Buscar" />
      </div>

    </div>
  );
}

export default App;
