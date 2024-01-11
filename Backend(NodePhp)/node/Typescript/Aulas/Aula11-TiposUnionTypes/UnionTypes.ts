const addOrConcat = (a: number | string, b: number | string): number | string => {
    if(typeof a === 'number' && typeof b === 'number') return a+b;
    if(typeof a === 'string' && typeof b === 'string') return a+b;
    return `${a}${b};`
};

console.log(addOrConcat(50, 25));
console.log(addOrConcat('Ryan', ' Menezes'));