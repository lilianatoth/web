function greetings(name){
    console.log(`Heelo ${name}!`)
}

const cim = document.querySelector('h1')
const input = document.querySelector('input#nev')
const buuton = document.querySelector('button#send')
console.log(cim, input, button)

button.addEventListener('click', onClick)

function onClick (){
    cim.innerHTML = `Hello, ${input.value}!`;
}

cim.innerHTML = `Hello, ${nev}!`;
console.log(cim)