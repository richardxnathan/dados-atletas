class Atleta {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calculaCategoria(){
        let categoria = ""
        if(this.idade>=9 && this.idade<=11){
            return categoria = "Infantil"
        } else if (this.idade>=12 && this.idade<=13){
            return categoria = "Juvenil"
        } else if (this.idade>=14 && this.idade<=15){
            return categoria = "Intermediário"
        } else if (this.idade>=16 && this.idade<=30){
            return categoria = "Adulto"
        } else {
            return categoria = "Sem categoria"
        }
    }

    calculaIMC(){
        let imc = this.peso/(this.altura*this.altura)
        return imc
    }

    calculaMediaValida(){
        let notasCrescentes = this.notas
        notasCrescentes.sort((a, b) => {
            if(a<b)return -1
        })
        
        let notasParaMedia = notasCrescentes.slice(1,4)
        
        let somaDasNotas = notasParaMedia.reduce(function(total, atual){
            return total + atual
        })
        
        let media = somaDasNotas/(this.notas.push()-2)
        return media
    }

    obtemNomeAtleta(){
        return `Nome: ${this.nome}`
    }
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`
    }

    obtemPesoAtleta(){
        return `Peso: ${this.peso}`
    }

    obtemNotasAtleta(){
        return `Notas: ${this.notas}`
    }

    obtemCategoria(){
        return `Categoria: ${atleta.calculaCategoria()}`
    }

    obtemIMC(){
        return `IMC: ${atleta.calculaIMC()}`
    }

    obtemMediaValida(){
        return `Média Válida: ${atleta.calculaMediaValida()}`
    }

}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())