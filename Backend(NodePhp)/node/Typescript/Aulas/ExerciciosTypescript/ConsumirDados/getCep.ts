import axios from "axios";
import { HttpStatusCode } from "axios";
const baseURl: string = "https://brasilapi.com.br/api/cep/v2/";

interface dadosCep {
  cep?: string;
  state: string;
  city: string;
  neighborhood?: string;
  street?: string;
  service: string;
};

const buscaCep = async (cep: string): Promise<void> => {
  const response = await axios.get(baseURl + cep);
  if (response.status != HttpStatusCode.Ok) {
    return console.log("Dados não encontrados, digite o cep novamente");
  };

  const dados: dadosCep = response.data;
  return console.log(
    "Dados encontrados: " +
      `Cep: ${dados.cep}, Cidade: ${dados.city}, Bairro: ${dados.neighborhood}, Rua: ${dados.street}, Serviços: ${dados.service}`
  );
};

buscaCep("07160170");
