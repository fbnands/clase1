let number = 0;
const array = []

// console.log("esto está antes del bucle");
// array.forEach();

// while (number < 6){
//   console.log("esto está adentro del bucle", number);
//   number += 1;
// };

// for(let i = 0; i <= 10; i++){
//   console.log("number: ", i);
// }
const secretNumber = 6;
let areTheSameNumber = false;


// while( !areTheSameNumber ){
//   const numberEntried = parseInt( prompt("Ingresa un numero para adivinar el número secreto") );

//   if(secretNumber === numberEntried){
//     areTheSameNumber = true;
//   };

// };

// console.log("esto está afuera del bucle");

//El usuario va a ingresar un numero (no muy grande) y el bucle va a imprimirlo indefinidamente por consola hasta llegar a ese numero empezando desde el cero

// const numberEntried = parseInt( prompt("Ingresa un numero limite") );

let numberPrinted = 0;

// while ( numberPrinted <= numberEntried ){
//   console.log(numberPrinted);
//   numberPrinted += 1;
// };

// for (let index = 0; index < 10; index++) {
//   console.log(index)
// }

//Crear un menu con 4 opciones:
// si se oprime el 1 va a decir tu nombre,
// si se ingresa el 2 va a decir tu ocupación
// si se ingresa el 3 va a decir tu comida favorita
// si se ingresa el 4 se sale del menu
// si se ingresa un numero diferente va a decir qu ingrese una opcion valida

let number1 = 0

while(number1 !== 4){
  console.log("operacion de validacion: ", number1 !== 4);
  number1 = parseInt( prompt("ingresa un número"));

  switch (number1) {
    case 1:
      console.log("mi nombre es _");
      break;
    case 2:
      console.log("soy _");  
      break;
    case 3:
      console.log("mi comida favorita es _");
      break;
    case 4:
      break;
    default:
      console.log("ingrese un número válido");
      break;
  }

  console.log("numero: ", number1);
}