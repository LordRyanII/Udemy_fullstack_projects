import axios from "axios";
const Listadefuncionarios = {
  "funcionarios": [
    {
      id: 1,
      nome: "João",
      cargo: "Gerente",
      salario: 5000.00
    }
  ]

}

interface Apifuncionarios {
  id: number;
  nome: string;
  sobrenome: string;
  email: string;
  genero: string;
  cidade: string;
  pais: string;
  empresa: string;
  salario: number;
}

class rhSystem {
  protected getFuncionarios() {
    try {
      const responstaApi = Listadefuncionarios.funcionarios;
      return responstaApi;
    } catch (error) {
      throw new Error("Erro ao obter funcionários");
    }
  }
}

class Funcionarios extends rhSystem {
  public getFuncionarias(): void {
    const listaFuncionarios = this.getFuncionarios();
    const funcionarias = listaFuncionarios.filter((obj: any) => {
      return obj.genero === "F";
    });
    return console.table(funcionarias);
  }

  public getFuncionariosMasculinos(): void {
    const listaFuncionarios = this.getFuncionarios();
    const funcionariosMasculinos = listaFuncionarios.filter((obj: any) => {
      return obj.genero === "M";
    });
    return console.table(funcionariosMasculinos);
  }

  public getFuncionariosBrasil(): void {
    const listaFuncionarios = this.getFuncionarios();
    const brasileiros = listaFuncionarios.filter((obj: any) => {
      return obj.pais === "Brasil";
    });
    return console.table(brasileiros);
  }
}

class searchFuncionarios extends rhSystem {
  public buscarPorid(idPesquisa: number): any {
    const listaFuncionarios = this.getFuncionarios();
    const resultado = listaFuncionarios.filter((obj: any) => {
      return obj.id === idPesquisa;
    });

    return resultado;
  }

  public buscarPorNome(nomePesquisa: string): any {
    const listaFuncionarios = this.getFuncionarios();
    const resultado = listaFuncionarios.filter((obj: any) => {
      return obj.nome === nomePesquisa;
    });

    return resultado;
  }
}

const listaFuncionarios = new searchFuncionarios();

console.log(listaFuncionarios.buscarPorid(10));
