Día 1.- Aprendi la teoría de que es javascript, lo que puede hacer y como ejecutarlo tanto en node.js como en la consola de navegador, entendi la importancia de usar las variables correctas en los contextos necesarios, si es que usaremos el valor, y el porque es de vital importancia declarar con let que con var. 

Día 2.- JavaScript se trata de un lenguaje que es dinámico, siendo así que sus variables pueden cambiar mientras esta en ejecución el programa. De igual manera, pude observar lo que fue la asignacion dinamica que posee el lenguaje. Asi como el uso y referencia que se toma en un objeto. El uso de los template literals me resulta muy conveniente, puesto que permite mostrar cadenas y numeros a la vez. 

Dia 3.- 
`Comparaciones:`Todas las operaciones de comparacion devuelven un valor booleano. Si intentamos comparar dos valores que son diferentes, es decir, un string con un numero, el string sera automaticamente convertido a numero, lo cual es bastante interesante. Una cuestion interesante, es debido a que esto existe, 0 se considera como false en una comparacio. Por lo que lo siguiente es 

# alert( 0 == false ); // true

Suena loco, no? Lo mismo pasa esto con:
# alert("0"== false ); // true

Esto sucede por lo mismo que mencione anteriormente, al pasarse a el otro valor de comparacion, lo detecta como un boolean, lo que realiza que false es igual a false, es correcto.
De esta manera, si queremos diferenciarlos se utiliza la igualdad estricta. Que no se trata mas que de lo siguiente.
# alert( 0 === false ); // false, because the types are different
`Condicional if, else if, else:` Aprendi nuevas cosas que no sabia, en este caso mas que nada de los operadores terciarios. A que me refiero, no entiendo su uso del todo para sentencias largas. Es importante que cuando se utilicen indicar con parentesis la condicion para mayor legibilidad. De igual manera, realice algunos ejercicios de practica por que lo habia olvidado un poco jaja. 

`Dia 4.-` Eh aprendido las bases de los loops en javascript, son tan interesantes el hecho de las declaraciones que tienen, siendo que puedes usar 
# if (!value) break; // (*)
Lo que ayuda a romper una condicional while, si es que queremos salir de ella. La diferencia que existe entre un do while y un while, es que en el do. El código se ejecuta por lo menos una vez. 
Existe la palabra reservada `continue` siendo un poco menos pesado que break, y sirve de manera similar, pero sin forzar o detener el ciclo, es decir, puede llegar a saltar algunas iterantes, las fuerza a saltar. Por ultimo, en dado caso de que el usuario no quiera seguir ingresando datos, y no sea necesario cumplir estrictamente la condicional, podemos usar una condicional con un label. Que se veria de la siguiente manera. 

## `outer: ` for (let i = 0; i < 3; i++) { Si visualizamos, outer es el nombre de la etiqueta, saliendose del lub en cuanto el usuario no ingrese nada en el input.

#  for (let j = 0; j < 3; j++) {
#
#    let input = prompt(`Value at coords (${i},${j})`, '');
#
#    // if an empty string or canceled, then break out of both loops
#    if (!input) break outer; // (*)

#    // do something with the value...
#  }
# }

# alert('Done!');

Algo especial de esta funcion es que solo se puede utilizar dentro de bloques de codigo, por lo que no puede ser usado para saltar libremente. 

En resumen... 
while – La condición se comprueba antes de cada iteración. 
do..while – La condición se comprueba después de cada iteración. 
for (;;) – La condición se comprueba antes de cada iteración, hay configuraciones adicionales disponibles
