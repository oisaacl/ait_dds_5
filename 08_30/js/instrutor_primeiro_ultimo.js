'use strict';

const instrutores = [
    'AMANDA XAVIER NASCIMENTO',
    'AYMAR ANTONIO DA SILVA',
    'DANIEL KALEB DE OLIVEIRA ALVES MOREIRA',
    'DEIVID GUIMARÃES GONÇALVES FILHO',
    'EMANOEL VITOR VENTURA ATANAZIO',
    'GABRIEL DE ASSIS SPERANDIO',
    'HELOISA RANGEL GUIMARÃES',
    'ISAAC LUCCA DE PAULA BARBARA',
    'JOÃO PEDRO COSTA SILVA',
    'MARCO ANTÔNIO SANTOS MEDEIROS',
    'MATHEUS SARTI BRUNELLI',
    'PIETRO GABRIEL HERINGER MENEZES',
    'VITOR VARGAS PARAJARA',
    'SARAH MONTEIRO DUQUE',
    'SAMARA DA SILVA RIBEIRO',
    'ANNA JULYA DOS SANTOS DA SILVA',
];


for (let i = 0; i < instrutores.length; i++) {

    const partes = instrutores[i].split(' ');


    const primeiroNome = partes[0];


    const ultimoNome = partes[partes.length - 1];


    console.log(' ' + primeiroNome + ' ' + ultimoNome);
}