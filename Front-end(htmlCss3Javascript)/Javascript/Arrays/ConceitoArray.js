// Indices:          0       1       2

const meusArray = ['Renata', 19, function RetornaAlgo(){

    return console.log('RetornaAlgo, foi retornado com sucesso!')
}]

console.log(meusArray[0]);
console.log(meusArray[1]);
console.log(meusArray[2]);

function RetornaFunctionDoArray(Indices){

    return meusArray[Indices]
}
let RetornaAlgo = RetornaFunctionDoArray(2);

RetornaAlgo()