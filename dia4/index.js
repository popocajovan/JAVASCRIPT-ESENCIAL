console.log("Contando del 1 al 10")
for(let i = 1; i<=10; i++) {
    console.log(i)
}
console.log("Numeros pares del 0 al 20") 
for (let i = 2; i<=20; i+=2) {
    console.log(i);
}
console.log("Cuenta regresiva");
let i= 0;
for(i=10; i>=1; i--){
    console.log(i)
}
console.log("¡Despegue! 🚀");

let contador = 0;
while (contador < 5) {
    console.log("Contador: ", contador);
    contador++;
}

let numero = 0;
do {
    console.log('Numero: ', numero);
    numero++;
    
} while (numero < 3);
console.log(numero) //Detalle importante, observar como se quedo en el numero 3, esto debido
// A que se realizo la sentencia antes de finalizar el while. 

for (let i = 0 ; i < 100; i++) {
    console.log(i);
    if (i === 5) {
        console.log('paramos en 5')
        break;
    }
}

console.log('Ejercicios') 
console.log( '1. Imprime números del 1 al 50')

for(i=1; i<=50; i++){
    console.log(i);
}
console.log( '2. Imprime números del 1 al 30')

for(i=1; i<30; i+=2){
console.log(i);
    
}
console.log( 'Tabla de multiplicar del 7 (7x1 hasta 7x10');

let variable = 1;

while(variable<=10) {
    let tabla = 7 * variable;
    console.log('7 x '+ variable,'=', tabla); 
    variable++
}

console.log( '4. Suma de todos los números del 1 al 100');

i= 0;
do {
    let suma = 0;
    suma+= i;
    i++

} while (i<=100);

console.log(i); //Esto debido a la condicion do while dio 101.

console.log( 'Imprime "Fizz" para múltiplos de 3, del 1 al 15');

for(let i= 1; i<=15; i++) {
    if (i%3==0) {
        console.log('Fizz')
    }
    else{
        console.log(i);
    }
}

console.log( 'Loop que pare cuando encuentre el número 37 (del 1 al 50)');


for(i=1; i<50;i++){
    console.log(i);
    if(i==37) break;
}

console.log('Imprime cuadrados de números del 1 al 10 (1², 2², 3²...)');
for(i=1; i<=10; i++) {
    let suma= (i*i);
    console.log(suma);
}