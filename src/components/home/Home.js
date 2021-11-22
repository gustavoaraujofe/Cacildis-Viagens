import HomeTitle from "../home-title/home-title";
import ButtonDark from "../button-dark/button-dark";
import InputData from "../input-data/input-data";
import Counter from "../counter/CounterPeople";
import InputSelect from "../input-select/InputSelect";
import NavBar from "../navbar/NavBar";


function Home(props) {
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

  return (
    <div>
      <NavBar pag="Home" backButton="/" />
      <HomeTitle />
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
      <Counter
        label="Pessoas"
        id="qtdPessoas"
        name="qtdPessoas"
        onChange={handleChange}
        value={props.dadosVoos.qtdPessoas}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
      <ButtonDark content="Buscar" to="flight-list" />
    </div>
  );
}

export default Home;
