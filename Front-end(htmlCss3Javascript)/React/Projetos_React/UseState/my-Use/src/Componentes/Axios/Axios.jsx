import axios from "axios";
import React, { useState } from "react";
import './Axios.css'

function Cep() {
  const urlBase = "https://brasilapi.com.br/api/cep/v1/";
  const [cepUser, setCep] = useState("");
  const [resposta, setResposta] = useState(""); // Estado para armazenar a resposta

  const buscaCep = () => {
    axios
      .get(urlBase + cepUser)
      .then((response) => {
        const data = response.data
        console.log(data);
        setResposta(data); // Atualiza o estado com a resposta da API
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <div className="bodyBusca">
        <h2>Digite o seu cep para buscar!</h2>
        <input type="text" onChange={event => setCep(event.target.value)} />
        <input type="button" value="Buscar" onClick={buscaCep} />
        <div className="res">
            {/* Renderiza a resposta na interface */}
            {resposta && (
              <div>
                CEP: {resposta.cep}<br />
                Logradouro: {resposta.neighborhood}<br />
                Bairro: {resposta.city}<br />
                Cidade: {resposta.service}<br />
                Estado: {resposta.state}<br />
              </div>
            )}
        </div>
      </div>
    </div>
  );
}

export default Cep;
