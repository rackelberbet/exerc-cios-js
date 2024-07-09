/* let a = "A"
let b = "B"
let c = "C"

let array = [ "C", "B", "A"];

[a,b,c] = array;

console.log(a, b, c) */

let a = "A"
let b = "B"

let storageA = a;

a = b
b = storageA;

console.log(a, b)
