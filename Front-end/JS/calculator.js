let digit = 0;
let digit2 = 0;
let number = document.getElementById("number1");
let number2 = document.getElementById("number2");
const signo = document.getElementById("sign");
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
const subs = document.getElementById("subs");
const multiplication = document.getElementById("mult");
const division = document.getElementById("div");

function nueve(){
    
    if(number.textContent == 0){
        number.textContent = nine.textContent
        digit = nine.textContent
    
    }
    else if (number.textContent > 0){
        number2.textContent = nine.textContent
        digit2 = nine.textContent
    }
    else{

    }
}

function ocho(){
    
    if(number.textContent == 0){
        number.textContent = eight.textContent
        digit = eight.textContent;
    }
    else if (number.textContent > 0){
        number2.textContent = eight.textContent
        digit2 = eight.textContent

    }
    else{

    }

}


function siete(){

    if(number.textContent == 0){
        number.textContent = seven.textContent
        digit = seven.textContent
    }
    else if (number.textContent > 0){
        number2.textContent = seven.textContent
        digit2 = seven.textContent
    }
    else{

    }
}

function seis(){
    
    if(number.textContent == 0){
        number.textContent = six.textContent
        digit = six.textContent
    }
    else if (number.textContent > 0){
        number2.textContent = six.textContent
        digit2 = six.textContent
    }
    else{

    }
}

function cinco(){

    if(number.textContent == 0){
        number.textContent = five.textContent
        digit = five.textContent
    }
    else if (number.textContent > 0){
        number2.textContent = five.textContent
        digit2 = five.textContent
    }
    else{

    }
}

function cuatro(){
    if(number.textContent == 0){
        number.textContent = four.textContent
        digit = four.textContent
    }
    else if (number.textContent > 0){
        number2.textContent = four.textContent
        digit2 = four.textContent
    }
    else{

    }
}

function tres(){
    if(number.textContent == 0){
        number.textContent = three.textContent
        digit = three.textContent
    }
    else if (number.textContent > 0){
        number2.textContent = three.textContent
        digit2 = three.textContent
    }
    else{

    }
}

function dos(){
    if(number.textContent == 0){
        number.textContent = two.textContent
        digit = two.textContent
    }
    else if (number.textContent > 0){
        number2.textContent = two.textContent
        digit2 = two.textContent
    }
    else{

    }
}

function uno(){
    if(number.textContent == 0){
        number.textContent = one.textContent
        digit = one.textContent
    }
    else if (number.textContent > 0){
        number2.textContent = one.textContent
        digit2 = one.textContent
    }
    else{

    }
}

function cero(){
    if(number.textContent == 0){
        number.textContent = zero.textContent
        digit = zero.textContent
    }
    else if (number.textContent > 0){
        number2.textContent = zero.textContent
        digit2 = zero.textContent
    }
    else{

    }
}

function suma(){

    signo.textContent = sum.textContent;
}

function resta(){

    signo.textContent = subs.textContent;
}

function product(){

    signo.textContent = multiplication.textContent;
}

function divi(){

    signo.textContent = division.textContent;
}
function equal() {
    
    console.log("This is digit:", digit)
    console.log("This is digit2:", digit2)
    console.log(signo.textContent)
    if (signo.textContent === "+") {
        
        console.log("Signo despues de entrar al bucle:", signo.textContent);
        let sumatoria = Number(digit) + Number(digit2);
        console.log(sumatoria)
        number.textContent = sumatoria;
        console.log(sumatoria)
        number2.textContent = "";
        signo.textContent = "";
    }
    else if(signo.textContent === "-"){
        let resta = Number(digit) - Number(digit2);
        number.textContent = resta;
        number2.textContent = "";
        signo.textContent = "";
        }
    else if(signo.textContent === "x"){
        let multi= Number(digit) * Number(digit2);
        number.textContent = multi;
        number2.textContent = "";
        signo.textContent= "";
    }
    else{
        let division = Number(digit) / Number(digit2);
        number.textContent = division.toFixed(2);
        number2.textContent = ""
        signo.textContent = "";
    }

    digit = Number(number.textContent);

}

function res(){

    number.textContent = 0;
    digit = 0;
    digit2 = 0;
    console.log("Reseting the values of both digits",digit,digit2)

}