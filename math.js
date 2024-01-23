const num = Number(prompt("Digite um número"))
const number = document.getElementById("number")
const text = document.getElementById("text")
let test = "a"
let testN ="b"
if(Number.isInteger(num) === false){
    test = "Não é inteiro"

}else {
    test= "É inteiro"
}

if(Number.isNaN(num) === false){
    testN = "É um número"

}else {
    testN= "Não é um número"
}


number.innerHTML += num;
text.innerHTML += `<p>Raiz quadrada: ${num**(1/2)}</p>`;
text.innerHTML += `<p>Arredondando para baixo ${Math.floor(num)}</p>`;
text.innerHTML +=  `<p> ${num} ${test}</p>`
text.innerHTML +=  `<p> ${num} ${testN}</p>`
text.innerHTML += `<p>Arredondando para cima ${Math.ceil(num)}</p>`;
text.innerHTML += `<p>Com duas casas decimais ${num.toFixed(2)}</p>`;

