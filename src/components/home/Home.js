import LogoTexto from "../logo-texto/logo-texto";
import HomeTitle from "../home-title/home-title";
import ButtonDark from "../button-dark/button-dark";
import InputTexto from "../input-texto/input-texto";
import InputData from "../input-data/input-data";
import ButtonPink from "../button-pink/button-pink";
import Counter from "../counter/counter";
import HeroImage from "../hero-image/hero-image";
import backgroundOne from "../../assets/images/homepage-image.jpg";
import backgroundTwo from "../../assets/images/homepage-image-two.jpg";
import UserIcon from "../user-login-icon/user-login";
import Timer from "../timer-reservation/timer-reservation";

function Home() {
  return (
    <div>
      <UserIcon />
     
      <Timer />
      <LogoTexto />
      <HomeTitle />
      Origem
      <InputTexto />
      Destino
      <InputTexto />
      Ida
      <InputData />
      Pessoas
      <Counter />
      <ButtonDark content="Buscar" />
      <ButtonPink content="Confirmar" />
      <HeroImage img={[backgroundOne, backgroundTwo]} />
    </div>
  );
}

export default Home;
