class Pessoas {
    constructor(firstName, lastName, number, email) {
        this.Name = {
            first: firstName,
            last: lastName
        };
        this.number = number;
        this.email = email
    }

    infoCadastro() {
        const celular = this.number;

        return {
            nomeCompleto: `${this.Name.first} ${this.Name.last}`,
            celular: `${celular}`,
            email: `${this.email}`
        }
    }
}

class Endereco extends Pessoas {
    constructor(firstName, lastName, number, email, endereco) {
        super(firstName, lastName, number, email);
        this.endereco = endereco;
    }

    getEndereco() {
        const {nomeCompleto, celular, email} = this.infoCadastro();

        return console.log(`Bem-vindo ${nomeCompleto}, dados cadastrados: ${email}, ${celular}, e por fim, seu endereço: ${this.endereco}.`);
    }
}

const pessoa = new Endereco('Joaquim', 'Barbosa', '95481515151', 'joaquim.barbosa@gmail.io', 'R. Matos vieira, 17. Jardim americanas');

pessoa.getEndereco();