import ButtonDark from "../button-dark/button-dark";
import ButtonPink from "../button-pink/button-pink";
import InputTexto from "../inputTexto/inputTexto";

function Home() {
  return (
    <div>
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
