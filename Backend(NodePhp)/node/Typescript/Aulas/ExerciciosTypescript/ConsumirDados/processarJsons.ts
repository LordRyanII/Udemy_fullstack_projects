import axios from "axios";
const Listadefuncionarios = require("./json/funcionarios.json");

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
  public getFuncionarios(): Apifuncionarios[] {
    try {
      const responstaApi = Listadefuncionarios.funcionarios;
      return responstaApi;
    } catch (error) {
      console.error("Erro ao obter funcionários:", error);
      throw new Error("Erro ao obter funcionários");
    }
  }
}

class funcionarios extends rhSystem {
  public getFuncionarias(): any {
    const listaFuncionarios = this.getFuncionarios();
    const funcionarias = listaFuncionarios.filter((obj: any) => {
      return obj.genero === "F";
    });
    return funcionarias;
  }

  public getFuncionariosMasculinos(): any {
    const listaFuncionarios = this.getFuncionarios();
    const funcionariosMasculinos = listaFuncionarios.filter((obj: any) => {
      return obj.genero === "M";
    });
    return funcionariosMasculinos;
  }

  public getFuncionariosBrasil(): any {
    const listaFuncionarios = this.getFuncionarios();
    const brasileiros = listaFuncionarios.filter((obj: any) => {
      return obj.pais === "Brasil";
    });
    return brasileiros;
  }
}

const listaFuncionarios = new funcionarios();

console.log(listaFuncionarios.getFuncionariosBrasil());
