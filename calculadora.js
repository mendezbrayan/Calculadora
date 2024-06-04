const btnCambiar = document.querySelector('#btn-cambiar')
const cambio = document.querySelector('#cambio')
const calculadora2 = document.querySelector('#calculadora2')
const boton1 = document.querySelectorAll('.boton1')
const operadores = document.querySelectorAll('.operadores')
const colorDelete = document.querySelector('#color-delete')
const colorC = document.querySelector('#color-c')
const colorPunto = document.querySelector('#color-punto')



btnCambiar.addEventListener('click', () => {

    cambio.classList.toggle('contenedor')
    cambio.classList.toggle('tema2-contenedor')
    calculadora2.classList.toggle('calculadora')
    calculadora2.classList.toggle('calculadora2')
    texto.classList.toggle('texto1')
    texto.classList.toggle('texto2')
    colorC.classList.toggle('btn-C')
    colorC.classList.toggle('btn-C2')
    colorDelete.classList.toggle('delete')
    colorDelete.classList.toggle('delete2')

    boton1.forEach((btn) => {
        btn.classList.toggle('boton1')
        btn.classList.toggle('boton2')
    })
    operadores.forEach((btn) => {
        btn.classList.toggle('operadores')
        btn.classList.toggle('operadores2')
    })
})

const btnC = document.querySelector('.btn-C')
const texto = document.querySelector('#texto')
let numeros = document.querySelectorAll('.numero');
let btnAccion = document.querySelectorAll('.accion')
let primerNumero = 0;
let segundoNumero = 0;
let acumulador = 0;
let signo = '';
let primeraVez = true;






numeros.forEach((btn) => {

    btn.addEventListener('click', () => {
        texto.value += btn.value

    });
});
const suma = () => {
    acumulador += primerNumero

}
const resta = () => {
    if (primeraVez) {
        acumulador = primerNumero + Math.abs(acumulador)
        primeraVez = false;
    } else if (acumulador >= 0) {
        acumulador = Math.abs(acumulador) - primerNumero
    } else {
        acumulador = acumulador - primerNumero
    }

}
const multiplicacion = () => {
    if(acumulador == 0){
        acumulador = 1;
        acumulador = acumulador * primerNumero
    }else{
        acumulador * primerNumero
    }

}
const division = () => {
    if (acumulador == 0) {
        acumulador = primerNumero 
    } else {
        acumulador = acumulador / primerNumero
    }

}
const igual = () => {

    if (signo == '+') {
        acumulador = 0;
        segundoNumero = parseInt(texto.value)
        acumulador = acumulador + segundoNumero
        texto.value = acumulador

    }
    else if (signo == '-') {

        segundoNumero = parseInt(texto.value)
         acumulador = acumulador - segundoNumero
        texto.value = acumulador
        primeraVez = true;

    } else if (signo == '/') {

        segundoNumero = parseInt(texto.value)
         acumulador = acumulador / segundoNumero
        texto.value = acumulador
        

    } else if (signo == '*') {
    segundoNumero = parseInt(texto.value)
        
         acumulador = acumulador * segundoNumero
        texto.value = acumulador
        

    }

}

btnAccion.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        if(texto.value == ''){
            alert('Ingrese un Numero')
        }
       else if (e.target.value != '=') {

            primerNumero = parseInt(texto.value)
            switch (e.target.value) {
                case '+':
                    if (signo != '')// el signo debe ser diferente a vacio para que entre en el if
             
                     {
                        igual()
                    } else {
                        suma()
                    }
                    break;
                case '-':
                    if (signo != '') {
                        igual()
                    } else {
                        resta()
                    }
                    break;
                case '*':
                    if (signo != '') {
                        igual()
                    } else {
                        multiplicacion()
                    }

                    break;
                case '/':
                    if (signo != '') {
                        igual()
                    } else {
                        division()
                    }
                    break;


            }

            texto.value = '' 
            signo = e.target.value 

        }else {
            
         igual()
         signo = '';
         acumulador = 0;
    }


    })
})
btnC.addEventListener('click', () => {
    texto.value = '';
    segundoNumero = 0;
    primerNumero = 0;
    acumulador = 0;
    primeraVez = true;
    signo = ''

})
