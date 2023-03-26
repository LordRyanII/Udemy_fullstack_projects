const myfunction = (callback) =>{
    let value = 77

    callback(value)
}

myfunction(num =>{
    console.log(`O callback da variavel value se torna 
    o argumento num que é ` + num)
})