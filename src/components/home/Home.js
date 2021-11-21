import LogoTexto from "../logo-texto/logo-texto";
import ButtonDark from "../button-dark/button-dark";
import ButtonPink from "../button-pink/button-pink";
import InputTexto from "../input-texto/inputTexto";

function Home() {
  return (
    <div>
      <LogoTexto />
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
