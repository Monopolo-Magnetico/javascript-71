/**
 * Prompt:
 * 1. Hay que asignar su uso a una variable para luego poder usar el valor que ingresó el usuario.
 *      1.2 Usar el valor inmediatamente
 * ! Importante
 * 
 * 1. No se recomienda su uso en aplicaciones en produccion
 * 2. Bloquea el código, esto quiere decir que el código que esté debajo de donde escribimos el uso de prompt no se va a ejecutar hasta que el usuario ingrese algo.
 * 3. No se puede personalizar.
 * 4. Todo lo que ingresa mediante prompt siempre es un String.
 * 
 * Nota:
 * ? \n es un caracter que nos inserta un salto de linea
 * 
 */

/* const edad = prompt("Ingresa tu edad", 15);
const nombre = prompt("Ingresa tu nombre", "fulano");
console.log(edad);
console.log("Hola soy " + nombre + " y tengo " + edad + " años");
alert("Hola soy " + nombre + " y tengo " + edad + " años")
 */

let serie = prompt("¿Cual es tu serie o película favorita?");
let personaje = prompt("¿Cuál es tu personaje favorito de esa serie o película?");
let motivo = prompt("¿Porqué es tu personaje favorito?");

alert("Mi serie o película favorita es " + serie + " y mi personaje favorito de esa serie o película es " + personaje + " porque " + motivo);