let a = 10;
let b = 5;
let c = "10";

console.log(a > b);    // true
console.log(a < b);    // false
console.log(a >= 10);  // true
console.log(a == c);   // true (solo valor)
console.log(a === c);  // false (valor y tipo)
console.log(a != b);   // true
console.log(a !== c);  // true

// 2. IF simple
let edad = 18;
if (edad >= 18) {
  console.log("Eres mayor de edad");
}

// 3. IF/ELSE
let precio = 150;
if (precio > 100) {
  console.log("Producto caro");
} else {
  console.log("Producto barato");
}

// 4. IF/ELSE IF/ELSE
let hora = 14;
if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 20) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}

// 5. Operadores lógicos
let tieneDinero = true;
let esMiembro = false;

// AND (&&) - ambos deben ser true
if (tieneDinero && esMiembro) {
  console.log("Descuento especial");
}

// OR (||) - al menos uno true
if (tieneDinero || esMiembro) {
  console.log("Puede comprar");
}

// NOT (!) - invierte el valor
if (!agotado) {
  console.log("Producto disponible");
}

// 6. Operador ternario
let temperatura = 25;
let clima = temperatura > 30 ? "Calor" : "Fresco";
console.log(clima);