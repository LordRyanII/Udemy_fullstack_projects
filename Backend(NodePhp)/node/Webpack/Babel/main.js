const nome = 'Ryan';
const obj = {nome};
const novoObj = {...obj};

console.log(novoObj);

const data = () => {
    const date = new Date();
    return date.getFullYear();
};

console.log(data());