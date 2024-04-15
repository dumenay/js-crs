let pessoa = {
    nome: 'Fulano',
    idade: 25,
    estuda: true,
    endereco: {
        rua: 'Rua Cleitinho Arrastape',
        cidade: 'Wingslompson',
        numero: '666',
    },
    idioma: [
        'portugues',
        'ingles',
        'italiano',
        'russo',
    ],
    // programando: () => {
    //     console.log('programa');
    // }
}

const oi = require('./oi.json')

// console.log(oi);

// console.log(pessoa.programando());

let pessoas = [
    {
        nome: 'beltrano',
        idade: '29'
    },
    {
        nome: 'ciclano',
        idade: '18'
    },
    {
        nome: 'anderson',
        idade: '19'
    }
]

// pessoas.forEach((pessoa) => console.log(`Meu nome é ${pessoa.nome} e eu tenho ${pessoa.idade} anos`));

// let chave = Object.keys(pessoa);
// chave.forEach((dados) => {
//     console.log(pessoa[dados]);
// });

// let texto = (JSON.stringify(pessoa));
// console.log(JSON.parse(texto));

let carro = {
    marca: 'Volkswagen',
    modelo: 'Gol',
    ano: '2015',
    cor: 'Vermelho',
    seguro: '12 meses',
    unico_Dono: false,
    preco: 'R$ 32,000',
    combustivel: 'Gasolina',
    estado: {
        rodas: 'Ótimo estado',
        motor: 'Perfeito estado',
        chassi: 'Levemente danificado',
        interior: 'Ótimo estado',
        suspensao: 'Ótimo estado',
    },
}

console.log(carro);