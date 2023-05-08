let origem = { a: 1, b: 2 };
let clone = Object.assign({}, origem);

console.log(origem)
console.log(origem.hasOwnProperty('a'));
console.log(clone); 