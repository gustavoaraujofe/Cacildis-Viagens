import axios from "axios";
import { useState, useEffect } from "react";

function DolarReal(props) {
  const [priceDolar, setPriceDolar] = useState(0);

  useEffect(() => {
    async function convert() {
      try {
        const response = await axios.get(
          "https://economia.awesomeapi.com.br/last/USD-BRL"
        );

        setPriceDolar(response.data.USDBRL.bid);
      } catch (err) {
        console.log(err);
      }
    }
    convert();
  }, []);

  let valor = (props.value * priceDolar).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return valor;
}

export default DolarReal;
