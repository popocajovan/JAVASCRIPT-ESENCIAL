// 1. CREAR ARRAYS
let numeros = [1,2,3,4,5,];
let frutas = ["Manzana", "Pera","Uva"];
let productos = ["Hamburguesa", "Pizza", "Tacos"];
let precios = [120,180,85];
let mixto = [1,"texto", true, null];

console.log(frutas);
console.log(numeros)

// 2. ACCEDER A ELEMENTOS (índices empiezan en 0)

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

// Último elemento
console.log(frutas[frutas.length-1]);

// 3. MODIFICAR ELEMENTOS

frutas[1]= "Sandia";
console.log(frutas);

// 4. PROPIEDADES Y MÉTODOS
console.log(frutas.length);

// push() - agregar al final
productos.push("Hot dog");
console.log(productos);
// pop() - quitar del final
let ultimo = productos.pop();
console.log(ultimo);
console.log(productos);
// unshift() - agregar al inicio
productos.unshift("Ensalada");
console.log(productos);
// shift() - quitar del inicio
let inicio = productos.shift();
console.log("Quitamos del inicio:"+ inicio);

// 5. RECORRER ARRAYS CON FOR
console.log("Lista de productos ")
for (let i =0; i < productos.length; i++){
    console.log((i+1)+ ". "+productos[i]);
}
// 6. BUSCAR ELEMENTOS

let bebidas= ["Coca Cola", "Pepsi", "Sprite", "Fanta"];

// indexOf() - posición del elemento
let posicion = bebidas.indexOf("Sprite");
console.log ("La bebida Sprite se encuentra en: "+ posicion);

//// includes() - verifica si existe
if(bebidas.includes("Coca Cola")){
    console.log("Coca Cola si existe en el arreglo");
}
// 7. SLICE - copiar parte del array
let some_drinks = bebidas.slice(0,2);
console.log(some_drinks);
// 8. SPLICE - eliminar/insertar elementos
let numeros2= [1,2,3,4,5];
numeros2.splice(1,2);
console.log(numeros2); //1,4,5

// ### Ejercicios:
//1. Crea array con 7 días de la semana, imprime cada uno

let cont= 1;
let semana = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
for(let items of semana){
    console.log(`${cont}.- ${items}`);
    cont++
}

// 2. Crea array de 5 precios, calcula la suma total con for
let precios2= [10,20,30,40,50];
let sumaTotal=0;
for(let i= 0; i<precios2.length; i++) {
    sumaTotal+= precios2[i];
}
console.log(sumaTotal);

/*
3. Crea array de productos:
   - Agrega 2 productos al final
   - Quita el primero
   - Imprime el array resultante
*/
let productos2= ["Hamburguesa","Papas","Refresco",];
console.log("Productos Originales: " + productos2);
productos2.push("Hot dog","Pizza");
console.log("Productos con 2 agregados: " + productos2);
productos2.shift();
console.log("Productos con el 1ero quitado: " + productos2);

let numeros3 = [1,2,3,4,5,6,7,8,9,10];
for(let num of numeros3){
    if(num>5){
        console.log(num);
    }
}
/*
5. Busca si existe "Pizza" en array de productos
   - Si existe: imprime "Disponible"
   - Si no: imprime "No disponible"

*/
if (productos2.includes("Pizza")){
    console.log("Disponible");
}else{
    console.log("No disponible")
}
//6. Crea función que reciba array y retorne el mayor número

function calcularMayor(array){
    let num= 0;
    for(let mayor of array){
        if(mayor>num) {
            num = mayor;
        }
    }
    return num
}
console.log(calcularMayor(numeros3));