// function greeting(name){
//   console.log("hola " + name);
// };

// greeting("Juan");

// date = "";
// time = "";
// isAvailable = false;







// Declara el objeto
// class Cashier {
//   avalaibleMoney = 0;

//   getTotalAvalaibleMoney(){
//     console.log(this.avalaibleMoney);
//   };
// };

// // Crear una instancia
// const x = new Cashier();

// console.log(x);


class Dog {
    // Propiedades
    name = "";
  
    // Se declara que inicializa
    constructor(name){
      this.name = name;
    };
  
    // Métodos
    bark(){
      console.log("woof");
    }
  
    getName(){
      console.log("My name is " + this.name);
    }
  };
  
  const dog1 = new Dog("negrito");
  const dog2 = new Dog("bruno");
  const dog3 = new Dog("pelusa");
  const dog4 = new Dog();
  
  console.log(dog1.getName());
  console.log(dog2.getName());
  console.log(dog3.getName());
  console.log(dog4.name );