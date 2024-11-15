 class Pessoa {
    nomeCompleto: string;
    idade: number;
    cpf: string;
    endereco: string;
    celular: string;

    constructor(nomeCompleto: string, idade: number, cpf: string, endereco: string, celular: string){
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.cpf = cpf;
        this.endereco = endereco;
        this.celular = celular;
    }

    preencherinformacao(){
        const nome = prompt("Qual o seu nome completo?");
        if(nome){
            this.nomeCompleto = nome;
        } else {
            console.log("Por favor, insira um nome valido!");
        }

        const idade = Number(prompt("Qual a sua idade? "));
        if(idade){
            this.idade = idade;
        } else {
            console.log("Digite uma idade valida, por favor");
        }

        const cpf = prompt("Digite o seu cpf: ");
        if(cpf){
            this.cpf = cpf;
        } else {
            console.log("Por favor, digite uma cpf valido!");
        }

        const endereco = prompt("Qual o seu endereço? ");
        if(endereco){
            this.endereco = endereco;
        } else {
            console.log("Por favor, digite um endereco valido!");
        }

        const celular = prompt("Qual o seu numero de telefone? ");
        if(celular){
            this.celular = celular;
        } else {
            console.log(" Por favor, digite um numero de telefone valido!");
        }
    }

    exibirinformacoes(){
        console.log("\n Informações ");
        console.log(`Seu nome completo é: ${this.nomeCompleto}`);
        console.log(`Sua idade é: ${this.idade}`);
        console.log(`Seu cpf é: ${this.cpf}`);
        console.log(`Seu endereço é: ${this.endereco}`);
        console.log(`Seu numero de telefone é: ${this.celular}`);
    }
}
    const minhaPessoa = new Pessoa(" ", 0, " ", " ", " ");

    minhaPessoa.preencherinformacao();
    minhaPessoa.exibirinformacoes();