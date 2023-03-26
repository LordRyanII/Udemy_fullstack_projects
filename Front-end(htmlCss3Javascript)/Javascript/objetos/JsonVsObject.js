// JSON Vs Objeto

const Obj = {
    a:1,
    b:2,
    c:3,
    soma(){
        return a+b+c
    }
}

console.log(JSON.stringify(Obj)) //Cria um arquivo JSON, transforma o objeto em JSON

// Criando arquivos JSON

console.log(JSON.parse('{"a": 1, "b": 2}')) //Cria um arquivo JSON
console.log(JSON.parse('{"a": "Larissa", "b": "Chaves", "c":[] }')) //É possível adicionar STRINGS ao Json