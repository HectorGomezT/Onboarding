let digit = parseInt(0);
let digit2 = parseInt(0);
const number = document.getElementById("number1");
const number2 = document.getElementById("number2");
const reset = document.getElementById("reset")
const nine = document.getElementById("nine");
const eight = document.getElementById("eight");
const seven = document.getElementById("seven");
const six = document.getElementById("six");
const five = document.getElementById("five");
const four = document.getElementById("four");
const three = document.getElementById("three");
const two = document.getElementById("two");
const one = document.getElementById("one");
const zero = document.getElementById("zero");
const sum = document.getElementById("sum");

function nueve(){
    
    if(number.textContent == 0){
        number.textContent = nine.textContent
        digit = nine.textContent
        console.log(digit)
    }
    else if (number.textContent > 0){
        number2.textContent = nine.textContent
        digit2 = nine.textContent
        console.log(digit2)
    }
    else{

    }
}

function ocho(){
    
    if(number.textContent == 0){
        number.textContent = eight.textContent
        digit = eight.textContent
        console.log(digit)
    }
    else if (number.textContent > 0){
        number2.textContent = eight.textContent
        digit2 = eight.textContent
        console.log(digit2)
    }
    else{

    }

}


function siete(){

    if(number.textContent == 0){
        number.textContent = seven.textContent
        digit = seven.textContent
        console.log(digit)
    }
    else if (number.textContent > 0){
        number2.textContent = seven.textContent
        digit2 = seven.textContent
        console.log(digit2)
    }
    else{

    }
}

function seis(){
    
    if(number.textContent == 0){
        number.textContent = six.textContent
        digit = six.textContent
        console.log(digit)
    }
    else if (number.textContent > 0){
        number2.textContent = six.textContent
        digit2 = six.textContent
        console.log(digit2)
    }
    else{

    }
}

function cinco(){

    if(number.textContent == 0){
        number.textContent = five.textContent
        digit = five.textContent
        console.log(digit)
    }
    else if (number.textContent > 0){
        number2.textContent = five.textContent
        digit2 = five.textContent
        console.log(digit2)
    }
    else{

    }
}

function cuatro(){
    if(number.textContent == 0){
        number.textContent = four.textContent
        digit = four.textContent
        console.log(digit)
    }
    else if (number.textContent > 0){
        number2.textContent = four.textContent
        digit2 = four.textContent
        console.log(digit2)
    }
    else{

    }
}

function tres(){
    if(number.textContent == 0){
        number.textContent = three.textContent
        digit = three.textContent
        console.log(digit)
    }
    else if (number.textContent > 0){
        number2.textContent = three.textContent
        digit2 = three.textContent
        console.log(digit2)
    }
    else{

    }
}

function dos(){
    if(number.textContent == 0){
        number.textContent = two.textContent
        digit = two.textContent
        console.log(digit)
    }
    else if (number.textContent > 0){
        number2.textContent = two.textContent
        digit2 = two.textContent
        console.log(digit2)
    }
    else{

    }
}

function uno(){
    if(number.textContent == 0){
        number.textContent = one.textContent
        digit = one.textContent
        console.log(digit)
    }
    else if (number.textContent > 0){
        number2.textContent = one.textContent
        digit2 = one.textContent
        console.log(digit2)
    }
    else{

    }
}

function cero(){
    if(number.textContent == 0){
        number.textContent = zero.textContent
        digit = zero.textContent
        console.log(digit)
    }
    else if (number.textContent > 0){
        number2.textContent = zero.textContent
        digit2 = zero.textContent
        console.log(digit2)
    }
    else{

    }
}

function operation(){

    let sumatoria = Number(digit) + Number(digit2);
    number.textContent = sumatoria;
    number2
    console.log(sumatoria)
}


//function reset() {
    //digit = 0;
   //digit2 = 0;
    //number.textContent = "0";
    //number2.textContent = "0";
    //console.log(digit, digit2);
//}