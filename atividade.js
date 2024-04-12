let estudante;
let passagem;

// estudante=true;
// estudante=false;

switch (estudante) {
    case true:
        passagem = 2.25;
        break;
    case false:
        passagem = 4.50;
        break;
    default:
        console.log("Não informado");
        break;
}
console.log("Valor da passagem : R$", passagem);