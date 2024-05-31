const btnCambiar = document.querySelector('#btn-cambiar')
const cambio = document.querySelector('#cambio')
const calculadora2 = document.querySelector('#calculadora2')
const b7 = document.querySelector('#b7')
const b8 = document.querySelector('#b8')
const b9 = document.querySelector('#b9')
const b4 = document.querySelector('#b4')
const b5 = document.querySelector('#b5')
const b6 = document.querySelector('#b6')
const b1 = document.querySelector('#b1')
const b2 = document.querySelector('#b2')
const b3 = document.querySelector('#b3')
const b0 = document.querySelector('#b0')
const btnColor0 = document.querySelector('#btn-color0')
const btnColor1 = document.querySelector('#btn-color1')
const btnColor2 = document.querySelector('#btn-color2')
const btnColor3 = document.querySelector('#btn-color3')
const btnColor4 = document.querySelector('#btn-color4')
const colorDelete = document.querySelector('#color-delete')
const colorC = document.querySelector('#color-c')
const colorPunto = document.querySelector('#color-punto')



btnCambiar.addEventListener('click', () => {
    cambio.classList.toggle('contenedor',)
    cambio.classList.toggle('tema2-contenedor')
    calculadora2.classList.toggle('calculadora')
    calculadora2.classList.toggle('calculadora2')
    texto.classList.toggle('texto1')
    texto.classList.toggle('texto2')
    b7.classList.toggle('boton1')
    b7.classList.toggle('boton2')
    b8.classList.toggle('boton1')
    b8.classList.toggle('boton2')
    b9.classList.toggle('boton1')
    b9.classList.toggle('boton2')
    b4.classList.toggle('boton1')
    b4.classList.toggle('boton2')
    b5.classList.toggle('boton1')
    b5.classList.toggle('boton2')
    b6.classList.toggle('boton1')
    b6.classList.toggle('boton2')
    b1.classList.toggle('boton1')
    b1.classList.toggle('boton2')
    b2.classList.toggle('boton1')
    b2.classList.toggle('boton2')
    b3.classList.toggle('boton1')
    b3.classList.toggle('boton2')
    b0.classList.toggle('boton1')
    b0.classList.toggle('boton2')
    btnColor0.classList.toggle('operadores')
    btnColor0.classList.toggle('operadores2')
    btnColor1.classList.toggle('operadores')
    btnColor1.classList.toggle('operadores2')
    btnColor2.classList.toggle('operadores')
    btnColor2.classList.toggle('operadores2')
    btnColor3.classList.toggle('operadores')
    btnColor3.classList.toggle('operadores2')
    btnColor4.classList.toggle('operadores')
    btnColor4.classList.toggle('operadores2')
    colorDelete.classList.toggle('delete')
    colorDelete.classList.toggle('delete2')
    colorC.classList.toggle('btn-C')
    colorC.classList.toggle('btn-C2')
    colorPunto.classList.toggle('operadores')
    colorPunto.classList.toggle('operadores2')

})
// boton de igual da el resultado de la operacion

// operadores 

// selecion de todas las clases
const btnC = document.querySelector('.btn-C')
const texto = document.querySelector('#texto')
let numeros = document.querySelectorAll('.numero');
let btnAccion = document.querySelectorAll('.accion')
let primerNumero = 0;
let numeroMult;
let segundoNumero = 0;
let acumulador = 0;
let opera;
let resultado;
let resultado3 = 1;
let signo = '';
let primeraVez = true;
let re = 0;


btnC.addEventListener('click', () => {
    texto.value = '';
    segundoNumero = 0;
    primerNumero = 0;
    acumulador = 0;
    resultado = 0;
     signo = ''
})

// es un bucle que permite recorrer estructuras que contienen varios elementos que serian 10

numeros.forEach((btn) => {

    btn.addEventListener('click', () => {
        texto.value += btn.value
        console.log(btn.value)

    });
});

btnAccion.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        if (e.target.value == '+' || e.target.value == '-' ||
            e.target.value == '/' || e.target.value == '*') {
                
                primerNumero = parseInt(texto.value)
            switch (e.target.value) {
                case '+':
                    acumulador += primerNumero
                    break;
                case '-':
                    if (primeraVez) {
                        acumulador = primeraVez + primerNumero
                        primeraVez = false;
                    } else if (acumulador >= 0) {
                        acumulador = Math.abs(acumulador) - primerNumero
                    } else {
                        acumulador = acumulador - Math.absprimerNumero
                    }
                    break;
                case '*':

                    resultado3 = resultado3 * primerNumero


                    break;
                case '/':
                    if(primeraVez){
                        acumulador = primerNumero + acumulador
                        primeraVez = false
                    }else{
                        acumulador = acumulador / primerNumero
                    }

                    break;


            }

            texto.value = ''
            signo = e.target.value

        }

        else if (e.target.value == '=') {


            if (signo == '+') {
                segundoNumero = parseInt(texto.value)
                resultado = acumulador + segundoNumero
                texto.value = resultado
            }
            else if (signo == '-') {
                
                segundoNumero = parseInt(texto.value)
                let resultado = acumulador - segundoNumero
                texto.value = resultado
                

            } else if (signo == '/') {
                segundoNumero = parseInt(texto.value)
                resultado = acumulador / segundoNumero
                texto.value = resultado
                primeraVez = true

            } else if (signo == '*') {
                
                segundoNumero = parseInt(texto.value)
                let resultado = resultado3 * segundoNumero
                
                texto.value = resultado
            }
            acumulador = 0;
            resultado3 = 1;

        }




    })
})

