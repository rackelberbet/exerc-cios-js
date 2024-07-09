let array = [1, 3, 5, 20, 18, 30, 40];

function crescente(a, b){
    return a - b;
}

array.sort(crescente);

console.log(array);