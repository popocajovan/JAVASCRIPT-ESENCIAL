//JavaScript es un lenguaje dinámico.

let name = 'Jovan';
let age = 30;
let isApproved = false;
let firstName = undefined;
let selectedColor = null; // este se trata de un objeto. Que ya no se encontraría en variable primitiva

//Tipos de referencia. Objetos.
let person = {
name: 'Jovas',
age: 30
};

// Notacion punto
person.name = 'Jovita' ;

// Notacion corchete
let selection = 'name' ;
person [selection] = 'Mary';

console.log(person.name);

//Arreglos

let selectedColors= ['red','blue'];

selectedColors[2] = 1;
console.log(selectedColors) //Con un corchete especificamos en que parte del indice queremos mostrar.
//Los arreglos se tratan de objetos tambien, debido a que heredan las mismas propiedades del mismo. 


