let firstNumber = document.getElementById('first-Number')
let secondNumber =  document.getElementById('second-Number')
let compare = document.getElementById('compare-btn')

compare.onclick = () =>{

    let fstNumber = Number(firstNumber.value)
    let secNumber = Number(secondNumber.value)

    if (fstNumber > secNumber) {
        let resultado = document.querySelector('.result')

        resultado.querySelector('.message').style.color = 'red';
        resultado.querySelector('.message').innerHTML = 'INCORRETO'
        resultado.querySelector('.description').innerHTML = `O número ${fstNumber} é <strong>maior</strong> que o segundo número (${secNumber}).`
    } 
    else if (fstNumber < secNumber) {
        let resultado = document.querySelector('.result')
    
        resultado.querySelector('.message').style.color = 'green';
        resultado.querySelector('.message').innerHTML = 'CORRETO'
        resultado.querySelector('.description').innerHTML = `O número ${fstNumber} é <strong>menor</strong> segundo número (${secNumber}).`
    } 
    else {
        let resultado = document.querySelector('.result')
        
        resultado.querySelector('.message').style.color = 'red';
        resultado.querySelector('.message').innerHTML = 'INCORRETO'
        resultado.querySelector('.description').innerHTML = 'Os números são iguais.'
    }
}



