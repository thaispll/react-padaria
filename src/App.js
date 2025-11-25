import './App.css';

function App() {
  return (
    <div className="container">

      {/* HEADER */}
      <div className="header">
        <img
          className="icone"
          src={process.env.PUBLIC_URL + "/usuario.png"}
          alt="Usuário"
        />

        <h1>PÃO QUENTINHO</h1>

        <img
          className="icone"
          src={process.env.PUBLIC_URL + "/carrinho.png"}
          alt="Carrinho"
        />
      </div>

      {/* PROMOÇÕES */}
      <p className="titulo-secao">PROMOÇÕES DO DIA</p>

      <div className="promocoes">
        <div className="card">
          <img src={process.env.PUBLIC_URL + "/pao.jpg"} alt="Pão fresquinho" />
          <p>PÃO FRANCÊS <br /> R$0,65</p>
        </div>
        <div className="card">
          <img src={process.env.PUBLIC_URL + "/bolo.jpg"} alt="Bolo fresquinho" />
          <p>BOLO DE FUBÁ <br /> R$7,50</p>
        </div>
        <div className="card">
          <img src={process.env.PUBLIC_URL + "/chocolate.jpg"} alt="Chocolate" />
          <p>CHOCOLATE <br /> R$9,50</p>
        </div>
        <div className="card">
          <img src={process.env.PUBLIC_URL + "/ovos-mexidos.jpg"} alt="ovos" />
          <p>OVOS-MEXIDOS <br /> R$11,50</p>
        </div>
      </div>

      <hr className="linha" />
      <img className="seta" src={process.env.PUBLIC_URL + "/seta.png"} alt="Seta" />

      {/* BARRA DE PESQUISA */}
      <div className="search-container">
        <img className="lupa" src={process.env.PUBLIC_URL + "/lupa(2).png"} alt="Buscar" />
        <input
          className="pesquisa"
          type="text"
          placeholder="Digite para buscar..."
        />
        <img className="lupa" src={process.env.PUBLIC_URL + "/lupa.png"} alt="Buscar" />
      </div>

    </div>
  );
}

export default App;
