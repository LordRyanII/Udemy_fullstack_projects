
const run = (email) => {
    if(email.includes('@')){
        return validaEmail(email);
    } else {
        console.log('Invalid email');
    }
};

function validaEmail(email){
    if(email.includes('.com')){
        console.log("Aprovado")
    }else {
        console.log("Reprovado")
    }
}

run('ryan@.com')
