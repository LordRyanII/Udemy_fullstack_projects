// Conceito de callBack

function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min

    return Math.floor(num)
}

function f1 (callBack){
    setTimeout(() => {
        console.log('F1');
        if(callBack){
            return callBack()
        }
    }, rand())
};

function f2 (callBack){
    setTimeout(() => {
        console.log('F2');
        if(callBack){
            return callBack()
        }
    }, rand())
   
}

function f3 (callBack){
    setTimeout(() => {
        console.log('F3');
        if(callBack){
            return callBack()
        }
    }, rand())
    
   
}

f1(f1callback)

function f1callback(){
    f2(f2callback)
};

function f2callback(){
    f3(f3callback)
};

function f3callback(){
    console.log('Olá mundo!')
}