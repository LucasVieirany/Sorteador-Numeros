



let quantidadeDeNumeros = 0;
let numeroMinimo = 0;
let numeroMaximo = 0;

function inputDeNumeros() {
    quantidadeDeNumeros = parseInt(document.getElementById("quantidade").value);
    numeroMinimo = parseInt(document.getElementById("de").value);
    numeroMaximo = parseInt(document.getElementById("ate").value); 
}


let listaDeNumerosSorteados = [];

function sortearNumeros() {
    listaDeNumerosSorteados = [];
    while (listaDeNumerosSorteados.length < quantidadeDeNumeros) {
        let numerosSorteados = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);  
        if (!listaDeNumerosSorteados.includes(numerosSorteados)) {
            listaDeNumerosSorteados.push(numerosSorteados);
        }
    }
}


// function sortearNumeros() {
//     listaDeNumerosSorteados = [];
//     for (let i = 0; i < quantidadeDeNumeros; i++) {
//         let numerosSorteados = Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);
//         if (!listaDeNumerosSorteados.includes(numerosSorteados)) {
//             listaDeNumerosSorteados.push(numerosSorteados);    
//         }  
//     }
// }



function executarSorteio() {
    inputDeNumeros(); 
    let rangeDeNumeros = numeroMaximo - numeroMinimo + 1;    
    if (quantidadeDeNumeros > rangeDeNumeros) {
        alert (`A quantidade de números únicos (${quantidadeDeNumeros}) ultrapassa o intervalo de números únicos possíveis solicitado (${rangeDeNumeros}).`);
        return;
    } else {
        sortearNumeros();
        document.getElementById("resultado").innerText = `Números sorteados: ${listaDeNumerosSorteados.join(", ")}`;
    }
    document.getElementById("btn-reiniciar").removeAttribute("disabled");     
}


 function limparcampo() {
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = "";
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerText="";
 }


function reiniciar() {
    limparcampo();
    document.getElementById("btn-reiniciar").setAttribute('disabled', true);
}














