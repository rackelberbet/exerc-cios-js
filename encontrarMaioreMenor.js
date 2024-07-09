/* function valorMaiorMenor(arr){
    let maior = Math.max(...arr);
    let menor = Math.min(...arr);

    return `O número maior é ${maior} e o menor é ${menor}.`
}

let array = [11, 2, 3, 4, 5, 6, 8 ,59, 9, 10];
let executeFunc = valorMaiorMenor(array);

console.log(executeFunc) */

function encontrarMaiorMenor(arr){
    if(arr.length === 0) {
        return 'Array vazio!'
    }

    let maior = arr[0];
    let menor = arr[0];

    for(let i = 0; i < arr.length; i++){

        if(arr[i] > maior){
            maior = array[i];
        } else if(arr[i] < menor) {
            menor = array[i]
        }
        
    }
    return `O número maior é ${maior} e o menor é ${menor}.`
}

let array = [11, 2, 3, 4, 5, 6, 8 ,59, 9, 10];
let executeFunc = encontrarMaiorMenor(array);

console.log(executeFunc)


for(let i in array){
    console.log(i)
}

for(let valor of array){
    console.log(valor)
}