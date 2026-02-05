// 1. FUNCIÓN SIN PARÁMETROS

function saludar() {
    console.log("Holaa!!");

}
saludar();
// 2. FUNCIÓN CON PARÁMETROS

function saludarPersona(nombre) {
    console.log("Holaa "+ nombre+"!!");
}

saludarPersona("Jovas");
saludarPersona("Maria");
// 3. FUNCIÓN CON RETURN

function sumar (a,b){
    return a+b
}
console.log("El resultado de la suma es: "+ sumar(5,6));
// 4. FUNCIÓN CON MÚLTIPLES PARÁMETROS

function calcularTotal(cantidad, precio) {

    let total= cantidad*precio;
    return total
}
let total = 0;
total= calcularTotal(3,100);
console.log("El total fue de: " + total);
// 5. FUNCIÓN CON VALORES POR DEFECTO

function crearProducto(nombre, precio=50){
    console.log(`Producto: ${nombre} Precio: ${precio}`);
}
crearProducto("Hamburguesa",100)
crearProducto("Refresco");
// 6. ARROW FUNCTIONS (forma moderna)

const multiplicar = (a,b) => {
    return a*b;
}
console.log("Esto es una multiplicacion con arrow: ",multiplicar(5,3))
// Arrow function corta (una sola línea)

const dividir = (a,b) => a/b;
// 7. FUNCIÓN QUE LLAMA A OTRA
function aplicarIva(precio) {
    return precio*1.16;
}
function aplicarDescuento (precio, descuento){
    let precioFinal=precio-(precio*descuento);
    return aplicarIva(precioFinal);
}
console.log(aplicarDescuento(100,0.10));
// Ejercicios:

//1. Función que reciba nombre y edad, e imprima:
//   "Hola [nombre], tienes [edad] años"
function saludo(nombre,edad){
    console.log(`Hola ${nombre}, tienes ${edad} anios`);
}
saludo("jovan",21);
// 2. Función que reciba 2 números y retorne el mayor
function esMayor(a,b){
    if (a>b)
        return a
    else 
        return b
}
console.log(esMayor(5,5));
// 3. Función que calcule el área de un rectángulo (base × altura)
const calcularArea = (a,b) => a*b

console.log(calcularArea(5,3));

// 4. Función que convierta grados Celsius a Fahrenheit
const conversionAFarenheit = (celsius) => {
    let Fahrenheit= (celsius * 9/5) +32 
    return Fahrenheit
}
console.log(conversionAFarenheit(100));

// 5. Función que reciba precio y aplique IVA del 16%

function applyIva(precio ) {
    return precio*1.16
}
function calculoPrecio(precio,descuento) {
    let precioFinal = precio-(precio*(1/descuento))
    return applyIva(precioFinal);
}
console.log(calculoPrecio(100,10))

const isPar= (a) => {
    if(a%2===0)
        return true 
    else 
        return false
}
console.log(isPar(3));

const calcularCuadrado = (a) =>  a*a

console.log(calcularCuadrado(3));

function calcularPromedio(nume){
    let suma= (nume[0]+nume[1]+nume[2]);
    return suma/3
}
let array = [5,5,3];
console.log(calcularPromedio(array));