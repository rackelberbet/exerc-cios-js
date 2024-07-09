let contador = 1;
let number = 10;

/* while(number >= contador){
    console.log(contador);
    contador++
}*/

/* do {
    console.log(contador)
    contador++
} while (number >= contador);*/

/* while(contador <= 10) {
    console.log(`iteração: ${contador}`)
    contador++
}*/

function random(min, max) {
    let r = Math.random() * (max - min) + min;
    return Math.floor(r)
}

let min = 1;
let max = 100;
let rand = random(min, max);
let rodada = 1


while(rand !== 10) {
    rand = random(min, max);
    console.log(`Rodada (${rodada}) - valor: ${rand}`);
    rodada++
}
