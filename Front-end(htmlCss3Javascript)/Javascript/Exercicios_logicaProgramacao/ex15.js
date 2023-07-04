const ArrayOrdem = (...valores) => {
    return valores.sort((a, b) => a - b);
};

console.log(ArrayOrdem(10, 20, 40, 15, 2, 4));
