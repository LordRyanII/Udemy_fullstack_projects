const nome = 'Ryan';
const obj = { nome };
const novoObj = { ...obj };

console.log(novoObj);

const GeraAno = (obj) => {
    const date = new Date();
    obj = date.getFullYear();
    return console.log(obj);
};


const Gerames = () => {
    const normalizaMes = () => {
        const date = new Date();
        const month = date.getMonth();
        if (month === 4) {
            return 'maio';
        }
        return obj;
    };

    return console.log(normalizaMes);
};

Gerames();

GeraAno();