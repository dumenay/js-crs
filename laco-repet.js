// let a=0;

// while (a<10) {
//     console.log(a);
//     a++
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// let vetor = [0, 1, true, false, "quarto"]
// console.log(vetor);

// //adiciona ao final
// vetor.push("ultimo");
// console.log(vetor);

// //remove do final
// vetor.pop();
// console.log(vetor);

// //adiciona ao começo
// vetor.unshift("primeiro");
// console.log(vetor);

// //remove do começo
// vetor.shift();
// console.log(vetor);

// //escolhe a posição e quantidade a ser removida
// vetor.splice(2, 2);
// console.log(vetor);

// //clonar inicial/final
// let copia = vetor.slice(2, 4);
// console.log(copia);

// // Separar texto pelo que quiser
// let texto = "Oi como vai voce";
// const vetorText = texto.split(' ');
// console.log(vetorText);

// // Modificar algo para maiusculo
// vetorText[2] = vetorText[2].toUpperCase();

// //Inserir algo entre eles e juntar
// console.log(vetorText.join(' '));

// //for que le valores de "vetor"
// for (let y = 0; y < vetor.length; y++) {
//     console.log(vetor[y]);
// }


//  ATIVIDADE

// // Metodo 1
// let vetor=[2, 6];

// vetor.push("+");
// vetor.push(vetor[1]);
// vetor.splice(1, 1);
// vetor.push("=");
// vetor.push(vetor[0] + vetor[2]);

// console.log(vetor);
// console.log(vetor.join(' '));

// // Metodo 2
// let vetor2=[2, 6];
// vetor2.push(vetor2[1]);
// vetor2.splice(1,1,"+");
// vetor2.push("=");
// vetor2.push(vetor2[0] + vetor2[2]);

// console.log(vetor2);
// console.log(vetor2.join(' '));

// // Criar função e chamar
// function somar(a, b) {
//     let result = Number(a) + Number(b);
//     return result;
// }

// console.log(somar(2,6));

// function print(texto) {
//     console.log(texto);
// }

// let textoparamaiusculo = "oitchauoi".split("");

// function maiusc(texto) {
//     return texto.toUpperCase();
// }
// // textopmaiusculo.forEach(print);

// let textomaiusculo = textoparamaiusculo.map(maiusc);

// console.log(textoparamaiusculo);
// console.log(textomaiusculo);

// let vetornumero = [1, 2, 3, 4]

// function soma (ant, atual) {
//     return ant + atual;
// }

// Chamar função dentro
// console.log(vetornumero.reduce(soma));

// Usar função dentro
// console.log(vetornumero.reduce((ant, atual) => ant+atual));

// Arrow function
// const soma = (ant, atual) => ant+atual;