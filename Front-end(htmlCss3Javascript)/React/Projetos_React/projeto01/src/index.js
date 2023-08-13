import React from 'react';
import ReactDOM from 'react-dom';
import BomDia from './componentes/BomDia';

//      nome do Componente |Propriedades (vars) | Nome do elemento html que será substituído
ReactDOM.render(<BomDia nome='Ryan' idade= {21}/>, document.getElementById('root'))