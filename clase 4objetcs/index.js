const array = ["hola", 0, false]// Esta es una estructura de datos
array.push("juan") // Aqui se agrega un nuevo elemento

array[3] = 5 // Aqui también se agrega un nuevo elemento

array[0] = "adios" // aqui se edita un elemento

array.pop() // aqui se elimina el último elemento


const array2 = ["hola", 0, false];
const person = {
  name: "oscar",
  age: 30,
  addresses: ["direccion 1", "direccion 2"],
  car: {
    brand: "chevrolet",
    model: 2020,
  },
  greeting: function(){
    console.log("say hello");
  }
};

const people = [person, person];

const animals = [
  {type: "can", age: 8},
  {type: "cat", age: 6},
]

// console.log(person.car.brand);

person.name = "juan" // Se reasigna el valor name