import HomeTitle from "../home-title/home-title";
import ButtonDark from "../button-dark/button-dark";
import InputData from "../input-data/input-data";
import Counter from "../counter/CounterPeople";
import InputSelect from "../input-select/InputSelect";
import NavBar from "../navbar/NavBar";
import "./Home.css";
import imgBackground from "../../assets/images/homepage-image.jpg";

function Home(props) {
  let to = "/";

  const increaseCount = () =>
    props.setDadosVoos({
      ...props.dadosVoos,
      qtdPessoas: props.dadosVoos.qtdPessoas + 1,
    });
  const decreaseCount = () => {
    if (props.dadosVoos.qtdPessoas > 0)
      props.setDadosVoos({
        ...props.dadosVoos,
        qtdPessoas: props.dadosVoos.qtdPessoas - 1,
      });
  };

  function handleChange(event) {
    props.setDadosVoos({
      ...props.dadosVoos,
      [event.target.name]: event.target.value,
    });
  }

  if (
    props.dadosVoos.qtdPessoas !== 0 &&
    props.dadosVoos.origem !== "" &&
    props.dadosVoos.destino !== "" &&
    props.dadosVoos.data !== ""
  ) {
    if (props.dadosVoos.origem !== props.dadosVoos.destino) {
      to = "/voos";
    }
  }

  function landingPage() {
    if (to === "/") {
      alert("Preencha todos os dados corretamente");
    }
  }

  return (
    <>
      <div className="h-100">
        <img src={imgBackground} alt="background" className="background" />

        <NavBar
          pag="Home"
          backButton="/"
          opacity="opacity-75"
          login={props.login}
          setLogin={props.login}
        />
        <div className="blockHome d-flex justify-content-center flex-column ms-2 me-2 mt-5">
          <div className="container d-flex align-items-center justify-content-center bg-opacity pt-3 pb-3 h-100">
            <div className="d-flex flex-column justify-content-between pt-3">
              <div className="h-75">
                <HomeTitle />
              </div>
              <InputSelect
                label="Origem"
                id="origem"
                name="origem"
                onChange={handleChange}
                value={props.dadosVoos.origem}
              >
                <option value="" disabled>
                  Selecione a origem
                </option>
                <option value="GRU">São Paulo - Guarulhos</option>
                <option value="GIG">Rio de Janeiro - Galeão</option>
                <option value="SSA">Salvador</option>
              </InputSelect>
              <InputSelect
                label="Destino"
                id="destino"
                name="destino"
                onChange={handleChange}
                value={props.dadosVoos.destino}
              >
                <option value="" disabled>
                  Selecione o destino
                </option>
                <option value="GRU">São Paulo - Guarulhos</option>
                <option value="GIG">Rio de Janeiro - Galeão</option>
                <option value="SSA">Salvador</option>
              </InputSelect>

              <InputData
                label="Ida"
                id="data"
                name="data"
                onChange={handleChange}
                value={props.dadosVoos.data}
              />
              <div className="mt-3">
                <Counter
                  label="Pessoas"
                  id="qtdPessoas"
                  name="qtdPessoas"
                  onChange={handleChange}
                  value={props.dadosVoos.qtdPessoas}
                  increaseCount={increaseCount}
                  decreaseCount={decreaseCount}
                />
              </div>
              <div className="mt-4 pb-4 btn-home">
                <ButtonDark content="Buscar" to={to} onClick={landingPage} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Home;
