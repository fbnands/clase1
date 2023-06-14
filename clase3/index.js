// const numero1 = 5;
// const numero2 = 2;

// if(numero1 === 3){
//   console.log("Este número es igual a 3");
// }else if(numero1 === 4){
//   console.log("Este número es igual a 4")
// }else{
//   console.log("Este número no es igual a ninguno de las comparaciones");
// }

//----El bloque if else de arriba es análogo al siguiente bloque switch ---

// El switch case solo se usa para comparar igualdad
// switch (numero1) {
//   case 3:
//     // Tu codigo aqui
//     console.log("Este número es igual a 3");
//     break;
//   case 4:
//     console.log("Este número es igual a 4")
//     break;
//   default:
//     console.log("Este número no es igual a ninguno de las comparaciones");
//     break;
// }

// Escribe un programa que solicite al usuario que ingrese un carácter. Utiliza un switch para determinar si el carácter ingresado es una vocal o una consonante, y muestra un mensaje correspondiente.

const character = prompt("Ingresa un caracter");
const vowels = ["a", "e", "i", "o", "u"];

// console.log("validando includes: ",vowels.includes(character)) // Validacion uso includes


if(isNaN(parseInt(character))){
  switch (character) {
    case "a":
      console.log("esto es un vocal");
      break;
    case "e":
      console.log("esto es un vocal");
      break;
    case "i":
      console.log("esto es un vocal");
      break;
    case "o":
      console.log("esto es un vocal");
      break;
    case "u":
      console.log("esto es un vocal");
      break;
    default:
      console.log("esto es una consonante");
      break;
  }
}else{
  console.log("El caracter ingresado es un número");
}

// Que el usuario ingrese un número y un switch indicar ese número a que mes del año corresponde

const numero1 =  parseInt(prompt ("Escriba un numero del 1 al 12"));

switch (numero1) {
  case 1:
    console.log("Es el mes de Enero");
    break;
  case 2:
    console.log("Es el mes de Febrero");
    break;
  case 3:
    console.log("Es el mes de marzo");
    break;
  case 4:
    console.log("Es el mes de Abril");
    break;
  case 5:
    console.log("Es el mes de Mayo");
    break;
  case 6:
    console.log("Es el mes de Junio");
    break;
  case 7:
    console.log("Es el mes de Julio");
  case 8:
    console.log("Es el mes de Agosto");
    break;
  case 9:
    console.log("Es el mes de Septiembre");
    break;
  case 10:
    console.log("Es el mes de Octubre");
    break;
  case 11:
    console.log("Es el mes de Noviembre");
    break;
  case 12:
    console.log("Es el mes de Diciembre");
    break;
  default:
    console.log("El numero ingresado no esta dentro del parametro")
    break;
}