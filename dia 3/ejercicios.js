let compra = 600;
let descuento = 0;
descuento = (compra > 500) ? descuento = 20 : 
(compra>300 ) ? descuento = 10: descuento = 0 ;
precioFinal =compra- (compra*(1/ descuento));
console.log(precioFinal)

let edad = 21;

if(edad<18) {
    console.log("No puedes entrar");
}
else if (edad>=18 && edad<65){
    console.log('BIENVENIDO');
} else{ 
    console.log("descuento senior");
}

let peso_empaque= 0.5
let precio= 0;

precio = (peso_empaque<1) ? precio= 50 :
(peso_empaque < 5) ? precio = 100 : precio = 150;

console.log(precio);