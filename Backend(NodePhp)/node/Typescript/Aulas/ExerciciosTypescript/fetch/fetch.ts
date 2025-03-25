interface dadosCep {
    cep?: string;
    state: string;
    city: string;
    neighborhood?: string;
    street?: string;
    service: string;
};
const baseURl: string = "https://brasilapi.com.br/api/cep/v2/";

const requestCep = async (cepDigitado: string): Promise<void> => {
    const requestApi: dadosCep = await fetch(baseURl + cepDigitado).then(response => response.json()).then(data => data);

    console.log(requestApi);

}

requestCep("92990000")