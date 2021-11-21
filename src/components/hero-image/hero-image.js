import { useState } from "react";

function HeroImage(props) {
  const [image, setImage] = useState(0);

  function handleClick() {
    setTimeout(() => {
      if (image > 0) {
        setImage(0);
      } else {
        setImage(1);
      }
    }, 1000);
  }

  return (
    <div>
      <img onClick={handleClick} src={props.img[image]} />
    </div>
  );
}

export default HeroImage;
