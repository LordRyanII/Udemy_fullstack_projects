"use strict";
function mostraMensagem(msg) {
    var sim = /sim/i;
    if (sim.test(msg)) {
        return 'Você digitou corretamente';
    }
    else {
        return 'Você digitou incorretamente';
    }
}
console.log(mostraMensagem('sim')); //Você digitou corretamente
console.log(mostraMensagem('não')); //Você digitou incorretamente
