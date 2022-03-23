/* 1. Faça um algoritmo para ler 20 números e armazenar em um array.
Após a leitura total dos 20 números, o algoritmo deve escrever esse array. */

function exercicio1() {

    var array1 = [];

    for (let contador = 1; contador < 21; contador++) {
        var num1 = prompt(contador + "/20 - Digite um número abaixo:");
        array1.push(" " + num1);
    }

    let div1 = document.querySelector("#ex1");
    div1.innerText = ("Os numeros escolhidos foram: " + array1 + ".");
}

/* 2. Faça um algoritmo para ler 12 números informados pelo usuário
e armazenar em dois arrays: um com os números acima de 50.
Outro com números abaixo de 50. */

function exercicio2() {
    var arrayAcima = [];
    var arrayAbaixo = [];


    for (let contador2 = 1; contador2 < 13; contador2++) {
        var num2 = prompt(contador2 + "/12 - Digite um numero abaixo: ");
        var num3 = " " + num2;

        if (num3 > 50) {
            arrayAcima.push(num3);
        } else {
            arrayAbaixo.push(num3);
        }
    }

    let div2 = document.querySelector("#ex2");
    div2.innerText = ("Números acima de 50: " + arrayAcima + ". E números abaixo de 50: " + arrayAbaixo + ".");
}

/* 3. Drofo e Topper estão em uma aventura mágica. Faça um programa que contenha
um inventário para cada um dos dois aventureiros - esse inventário será um array.

Drofo terá um anel da invisibilidade, dois pares de botas mágicas, uma poção do
sono e duas poções da inocência em seu inventário e nessa ordem. 
Topper terá uma capa da invisibilidade, uma pedra do despertar,
uma varinha das varinhas, uma poção da inocência e duas poções da mentira,
poção anti-inteligência e nessa ordem. 

No meio de sua jornada, Topper consumiu uma das poções da mentira, perdeu sua
pedra e ganhou um par de botas mágicas do Drofo, achou um escudo mágico e uma
espada mágica. 
Descreva cada uma das ações acima. utilizando código (utilize comentários para
    ficar mais claro). 

No meio da sua jornada, Drofo, ganhou mais uma bota mágica, usou sua poção do
sono e consumiu a poção anti-inteligência do Topper, encontrou um ovo de dragão e uma coxinha.
Descreva cada uma das ações acima. utilizando código.

Exiba o resultado final de cada um dos inventários utilizando "document.write" */

function exercicio3() {

    // Inventários 

    var invDrofo = ["Anel da Invisibilidade", " Botas Mágicas", " Botas Mágicas", " Poção do Sono", " Poção da Inocência", " Poção da Inocência"]
    var invTopper = ["Capa da Invisibilidade", " Pedra do Despertar", " Varinha das Varinhas", " Poção da Inocência", " Poção Anti-inteligência", " Poção da Mentira", " Poção da Mentira"]

    invTopper.pop(); // Topper consumiu uma das poções da mentira

    invTopper.splice(1, 1); // Perdeu sua Pedra do Despertar

    invDrofo.splice(1, 1); // Drofo deu um par de Botas Mágicas para Topper

    invTopper.splice(6, 0, " Botas Mágicas") // Topper tem agora um par de botas mágicas que ganhou do Drofo

    invTopper.splice(7, 0, " Escudo Mágico", " Espada Mágica"); // Topper achou um Escudo Mágico e uma Espada Mágica. Sortudo!


    invDrofo.splice(5, 0, " Botas Mágicas"); // Ganhou um par de Botas Mágicas

    invDrofo.splice(2, 1); // Usou a Poção do Sono

    invTopper.splice(3, 1) // Consumiu Poção Anti-inteligência do Topper

    invDrofo.splice(4, 0, " Ovo de Dragão", " Coxinha") // Encontrou um Ovo de Dragão e uma Coxinha

    let div3 = document.querySelector("#ex3");
    div3.innerText = ("DROFO: " + invDrofo);

    let div3b = document.querySelector("#ex3b");
    div3b.innerText = ("TOPPER: " + invTopper);







}

/* 4- Machado de Assis!
Foi um escritor brasileiro, considerado por muitos críticos, estudiosos,
escritores e leitores o maior nome da literatura brasileira. 

A sua lista de obras: 

Romances
Memorial de Aires (1908)
Ressurreição (1872)
Casa Velha (1885)
Memórias Póstumas de Brás Cubas (1881)
Helena (1876)
Quincas Borba (1891)
Esaú e Jacó (1904)
A mão e a luva (1874)
Dom Casmurro (1899)
Iaiá Garcia (1878)

Coletânea de Poesias
Americanas (1875)
Ocidentais (1880)
Falenas (1870)
Crisálidas (1864)
Poesias Completas (1901)

Coletânea de contos
Várias Histórias (1896)
Histórias sem Data (1884)
Papéis Avulsos (1882)
Contos Fluminenses (1870)
Histórias da Meia-Noite (1873)
Relíquias de Casa Velha (1906)
Páginas Recolhidas (1899)

Para cada um dos grupos de obras acima, ordene e crie um array com as obras. 

Agora, ainda utilizando código, crie mais um array e insira os três primeiros
livros de cada grupo de obras. */

function exercicio4() {

    var romances = ["Memorial de Aires (1908)", " Ressurreição (1872)", " Casa Velha (1885)", " Memórias Póstumas de Brás Cubas (1881)", " Helena (1876)", " Quincas Borba (1891)", " Esaú e Jacó (1904)", " A mão e a luva (1874)", " Dom Casmurro (1899)", " Iaiá Garcia (1878)"];
    var poesias = ["Americanas (1875)", " Ocidentais (1880)", " Falenas (1870)", " Crisálidas (1864)", " Poesias Completas (1901)"];
    var contos = ["Várias Histórias (1896)", " Histórias sem Data (1884)", " Papéis Avulsos (1882)", " Contos Fluminenses (1870)", " Histórias da Meia-Noite (1873)", " Relíquias de Casa Velha (1906)", " Páginas Recolhidas (1899)"];
    var geral = []


    for (let i = 0; i < 3; i++) {
        var primeiros = romances[i];
        geral.push(primeiros);
    }

    for (let i = 0; i < 3; i++) {
        var primeiros = poesias[i];
        geral.push(primeiros);
    }

    for (let i = 0; i < 3; i++) {
        var primeiros = contos[i];
        geral.push(primeiros);
    }

    let div4 = document.querySelector("#ex4");
    div4.innerText = ("ROMANCES é: " + romances);

    let div4b = document.querySelector("#ex4b");
    div4b.innerText = ("POESIAS é: " + poesias);

    let div4c = document.querySelector("#ex4c");
    div4c.innerText = ("CONTOS: " + contos);


    let div4d = document.querySelector("#ex4d");
    div4d.innerText = ("GERAL: " + geral);

}