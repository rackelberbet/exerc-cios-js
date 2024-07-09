function stringInvertida(str){
      
    let strAsArray = str.split("")
    
    let reverseArray = strAsArray.reverse()
    
    let joinArray = reverseArray.join("")

    return joinArray;
}

let string = "Rackel Garcia Berbet";

let executeFunc = stringInvertida(string)


console.log(executeFunc)