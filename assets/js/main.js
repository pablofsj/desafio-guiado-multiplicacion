// let num = +prompt('Por favor ingresar un numero entre 1 y 20')

const ejercicio = num => {

    
    //validar ingreso numero
    if(num < 1 || num > 20){
        console.log ('numero fuera de rango')
        return
    } 
    //imprimir multiplicacion
    for(let i= 1 ; i<=num ; i++){
        console.log(`${i} x ${num} = ${i*num}`)    
    }
    //calcular e imprimir factorial
    for(let i= 1 ; i<=num ; i++){
        const factorial = i =>{
            if(i===0){return 1}
            return i * factorial(i-1)
        }
        console.log(`Factorial de ${i} es: ${factorial(i)}`)    
    }
    
}

let continuar = true
while (continuar){
    const input =+prompt('Ingrese un numero entre 1 y 20')
    ejercicio(input)
    continuar = confirm('Deseas continuar con el programa?')
}







