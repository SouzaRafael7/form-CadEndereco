'use strict'; // Ativa o modo restrito

// codigo para consumo da via cep 
//https://viacep.com.br/

// Limpar consulta do form ja realizada
const limparFormulario = () =>{
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}

// verifica se o cep é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);

//verifica o tamanho do cep
const cepValido = (cep) => cep.length == 8 && eNumero(cep);