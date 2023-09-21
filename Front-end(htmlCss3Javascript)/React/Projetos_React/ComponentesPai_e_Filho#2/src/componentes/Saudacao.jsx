import React, { Component } from 'react';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '' //Aqui o valor inicial começa com vazio
    };
  }

  capturaEvento = (event) => {
  this.setState({ inputValue: event.target.value }); {/*Formata o evento*/}
  }

  render() {
    return (
      <div>
        <h1>
            Formulário Exemplo de uso de classes
        </h1>
        <hr/>
        <input type="text"value={this.state.inputValue} onChange={this.capturaEvento}/> {/*Aqui ocorre o evento, que manda para uma função*/}
        <p>Valor digitado: {this.state.inputValue}</p> {/*COMENTÁRIO: Propriedade contendo o valor que foi pego  */}
      </div>
    );
  }
}

export default Formulario;
