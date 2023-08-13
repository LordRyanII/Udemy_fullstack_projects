import React from 'react';
import ReactDOM from 'react-dom';

import Saudacao from './componentes/Multiplos';

ReactDOM.render(
    <div>
        <Saudacao.BoaNoite nome='Renata'/>
        <Saudacao.BoaTarde nome='Lily'/>
    </div>
,document.getElementById('root'))