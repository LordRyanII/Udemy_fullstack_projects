//IIFE -> Immediately Invoked Function Expressions
/*são funções JavaScript que são executadas imediatamente depois de serem definidas.
 Elas são escritas como expressões de função e são invocadas imediatamente, ou seja, 
 são executadas logo após serem definidas*/

(function(){
    console.log('Será exibido na hora');
    console.log('Evita erro com o escopo global');
})()