/**
 * En javascript hay 3 formas de declarar variables
 * ! Existe una forma que ya no se recomienda su uso
 * 
 * ! var
 * 
 * Al proceso de crear una variable y darle un valor se le llama asignación
 * 
 * A las variables que pueden ser reasignadas (pueden cambiar en un futuro el valor que tienen) se declaran:
 * 
 * ? let nombreVariable = valor;
 * 
 ** El operador = se conoce como operador de asignación
 * 
 * Una vez creada una variable podemos usarla en otros lugares del código utilizando su nombre, las variables al ser utilizadas no van entre comillas ""
 * 
 * Las variables que no pueden ser reasignadas (su valor no puede cambiar) se declaran:
 * 
 * ? const nombreVariable = valor;
 * 
 * Notas
 * Palabras reservadas: Son palabras que utiliza el lenguaje de programación y si intentamos usarlas en otros lados pueden generar errores.
 * 
 */

 let nombre = "David";
 let name = "Olaf";
 console.log(nombre);

 const birthYear = 1998;
 console.log(birthYear);

 /* Reasignando una variable (cambiando el valor que tiene)
 Cuando reasignamos una variable (una variable ya creada)
 ! Ya no es necesario poner let
 */

 nombre = "divaD";
 console.log(nombre);

 /** Seccion de prueba
  * 
  * birthYear = 1521;
  * 
  * 
  */

 console.log("Hola soy " + nombre + " estoy en gen con " + name + " naci en el año " + birthYear);