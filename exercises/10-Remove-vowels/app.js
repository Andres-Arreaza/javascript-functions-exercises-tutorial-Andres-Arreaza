//REMOVE VOWLES

// Creamos una funcion la cual elimine la vowels y que las letras se conviertan en mayuscula.
const rapid = (myString) =>{
    let consonants=[];
    for(let letter of myString.toUpperCase()){
        if(['A','E','I','O','U'].includes(letter)==false){
            consonants.push(letter);
        }
    }
    return consonants.join('');
}


// Work above this line; do not change code below
let str = "John";
console.log(rapid(str));
