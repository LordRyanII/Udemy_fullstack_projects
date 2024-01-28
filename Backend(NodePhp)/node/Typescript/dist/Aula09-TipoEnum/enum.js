"use strict";
var Cores;
(function (Cores) {
    Cores[Cores["VERMELHO"] = 0] = "VERMELHO";
    Cores[Cores["AZUL"] = 1] = "AZUL";
    Cores[Cores["AMARELO"] = 2] = "AMARELO"; //2
})(Cores || (Cores = {}));
;
(function (Cores) {
    Cores[Cores["VERDE"] = 3] = "VERDE";
    Cores["ROXO"] = "ROXO"; //É possível passar strings
})(Cores || (Cores = {}));
console.log(Cores);
