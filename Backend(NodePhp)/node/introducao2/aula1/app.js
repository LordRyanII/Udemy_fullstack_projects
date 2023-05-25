// Exemplo sobre o uso de modulos do javascript
const nome = 'Renata';
const sobrenome = 'Alves Da Luz';

const falaNome = () => nome + ' ' + sobrenome; //retorna a concatenação de nome e sobrenome com espaço

class Validahoras {
    constructor() {
        const data = new Date();
        this.horas = data.getHours();
        this.minutos = data.getMinutes();
    }
    getHoras() {
        const timer = setInterval(() => {
            console.log(`${this.horas}:${this.minutos}`)
        }, 1000);
        setTimeout(()=> {
           clearInterval(timer) 
        }, 5000);
    };
};

//atalho para exportar módulos
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquercoisa = 'Qualquer coisa que eu quiser exportar'
exports.Validahoras = Validahoras;



//exportar modulos

// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome;