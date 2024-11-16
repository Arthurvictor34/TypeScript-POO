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

 class Aluno extends Pessoa{
    matricula: string;
    periodo: number

    constructor(nomeCompleto: string, idade: number, cpf: string, endereco: string, celular: string, matricula: string, periodo: number){
        super(nomeCompleto, idade, cpf, endereco, celular);
        this.matricula = matricula;
        this.periodo = periodo;
    }

    preencherinformacao(){
        super.preencherinformacao();

        const matricula = prompt("Qual a sua matricula? ");
        if(matricula){
            this.matricula = matricula;
        } else {
            console.log(" Erro, por favor ");
        }

        const periodo = Number(prompt("Qual o seu periodo? "));
        if(periodo){
            this.periodo = periodo;
        }

    }
    exibirinformacao(){
        super.exibirinformacoes();

        console.log(`Sua matricula: ${this.matricula}`);
        console.log(`Seu periodo: ${this.periodo}`);

    }
}

 class Professor extends Pessoa {
        registro: string;

        constructor(nomeCompleto: string, idade: number, cpf: string, endereco: string, celular: string, registro: string){
            super(nomeCompleto, idade, cpf, endereco, celular);
            this.registro = registro;

        }

        preencherinformacao(){
            const registro = prompt("Qual o seu registro?");
            if(registro){
                this.registro = registro;
            } else {
                console.log("Erro, digite um registro valido!");
            }
        }

        exibirinformacoes(){
            
            console.log(`Seu registro: ${this.registro}`);
        }
 }
    const meuAluno = new Aluno(" ", 0, " ", " ", " ", " ", 0);
    const meuProfessor = new Professor(" ", 0, " ", " ", " ", " ");

    const escolha = prompt("Você é aluno ou professor? ");

    if(escolha === "Aluno" || escolha === "aluno"){
        //preencher informação do aluno
        meuAluno.preencherinformacao();

        //exibir informação do aluno
        meuAluno.exibirinformacoes();
    } else if(escolha === "Professor" || escolha === "professor"){
        //preencher informação do professor
        meuProfessor.preencherinformacao();

        //exibir informação do professor
        meuProfessor.exibirinformacoes();
    }