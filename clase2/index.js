// Elaborar un programa donde se ingresen 2 numeros, el programa decir cual es el mayor o si iguales
let a = parseInt(prompt("ingresa numero 1"));
let b = parseInt(prompt("ingresa numero 2"));


if (a == b) {
    alert("son iguales");
} else {
    if (a > b) {
        alert("numero mayor es " + a);
    } else {
        if (a < b) {
            alert("numero mayor es " + b);
        } else {
            alert("no ingresaste numero");
        };
    }
}

// Imprimir por consola los números del 1 al 10
for(let i = 1; i <= 10; i++){
  console.log(i);
}

// Imprimir por consola los número impares del 1 al 10 o hasta el número que se le especifique
for(let i = 1; i <= 1000000; i++){
  if(i % 2 === 1){
    console.log(i);
  }
}