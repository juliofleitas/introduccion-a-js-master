// Tarea 1:
// Preguntarle al usuario su nombre.
// Si el nombre del usuario es el mismo que  el  de ustedes
// Imprimir "Hola, Tocayo! Yo también me llamo " y su nombre.
// Elijan otro nombre, puede ser de un pariente, amigo, conocido.
// Si el nombe del usuario es el mismo que el que nombre que eligieron
// Imprimir "Hola " y el nombre, " te llamás igual que mi ..."
// Si no, simplemente imprimir "Hola " + nombre!

function compararNombres() {
    const MI_NOMBRE = "francisco";
    const NOMBRE_GATO = "nemo";
  
    let nombreUsuario = (prompt("Como te llamas?") || "").trim();
  
    if (nombreUsuario === MI_NOMBRE) {
      alert(`Bienvenido Tocayo! Yo también me llamo ${MI_NOMBRE}`);
    } else if (nombreUsuario === NOMBRE_GATO) {
      alert(`Te llamas igual que mi gato ${NOMBRE_GATO}`);
    } else if (isNaN(nombreUsuario)) {
      alert("El nombre ingresado no es válido.");
    } else {
      alert(`Bienvenido, ${nombreUsuario}`);
    }
  }

//Tarea 2:
// Preguntar la edad del usuario
// Hacerle saber si tiene más, menos ó la misma edad que nosotros.

//Tarea 3:
// Preguntarle al usuario si tiene documento, y que conteste con "si" o "no".
// Si dice si, preguntarle la edad.
// Si la edad es mayor a 18, dejarlo entrar al bar.
// Si la edad es menor a 18, no dejarlo entrar al bar.
// Si no tiene documento, no dejarlo entrar al bar.
// Si no entendemos la respuesta, le decimos que no entendimos la respuesta.
// Punto bonus: SI, NO, Si, No, si, no.
