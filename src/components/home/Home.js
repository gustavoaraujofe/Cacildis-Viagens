import LogoTexto from "../logo-texto/logo-texto";
import HomeTitle from "../home-title/home-title";
import ButtonDark from "../button-dark/button-dark";
import InputTexto from "../input-texto/inputTexto";
import ButtonPink from "../button-pink/button-pink";

function Home() {
  return (
    <div>
      <LogoTexto />
      <HomeTitle />
      <ButtonDark 
        content = 'Buscar'
      />
      <InputTexto
      />
      <ButtonPink 
        content = 'Confirmar'
      />
    </div>
  );
}

export default Home;
