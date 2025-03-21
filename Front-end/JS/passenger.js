//DOM - Document Object Model, aka how you use JS to modify a website 

const number = document.getElementById("number")

let count = 0;
let total = 0;

function increment() {
    count += 1
    number.innerText = count

}

function decrease(){
    
    if(count <= 0){
        total = total
    }
    else{
    count -= 1
    number.innerText = count
    }
}



const previousEl = document.getElementById("entries-el")
function save()
{
    let saveCount = 0 
    if(count > 0)
    {
    saveCount = count
    countStr = saveCount + " - "
    previousEl.textContent += countStr
    }
    else
    {
        previousEl
    }
}

const totalEl = document.getElementById("total")
function totalfun()
{
    total += count
    totalEl.textContent = "Total: " + " " + total
}


function reset(){
    count = 0
    number.innerText = 0 
}


const error_msg = document.getElementById("error")
function msg(){
    message = "There has been an error"
    error_msg.textContent = message
}

// Render the welcome message using welcomeEl.innerText


function notification(){
    let notif = "You have 3 notifications"
    let username = "per"
    let whole = username + " " + notif + "!"
    console.log(whole)
}

notification()





// let myAge = 24 
// let humanDogRatio = 7

// myDogAge = myAge * humanDogRatio

// console.log(myDogAge)


