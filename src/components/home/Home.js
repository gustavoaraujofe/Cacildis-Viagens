import LogoTexto from "../logo-texto/logo-texto";
import HomeTitle from "../home-title/home-title";
import ButtonDark from "../button-dark/button-dark";
import InputTexto from "../input-texto/input-texto";
import InputData from "../input-data/input-data";
import ButtonPink from "../button-pink/button-pink";
import Counter from "../counter/counter";

function Home() {
  return (
    <div>
      <LogoTexto />
      <HomeTitle />
      <InputTexto />
      <InputData />
      <Counter />
      <ButtonDark content="Buscar" />
      <ButtonPink content="Confirmar" />
    </div>
  );
}

export default Home;
