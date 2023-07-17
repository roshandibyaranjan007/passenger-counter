// document.getElementById("count-el").innerText=5

/* let count=5

//console.log(count)

console.log(myAge)

let myAge=28
//console.log(myAge) */

/* let myAge=35
let humanDogRatio=7

let myDogAge= myAge * humanDogRatio

console.log(myDogAge) */

/* let count = 50
console.log(count)
count=count+50
console.log(count)
count=count-25
console.log(count)
count=count+70
console.log(count) */

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)
console.log(saveEl)

let count=0

function increment() {
    count+=1
    countEl.textContent = count
    console.log(count)
}

function save() {
    let countStr= count + " - "
    saveEl.textContent+=countStr
    countEl.textContent=0
    count = 0
}
