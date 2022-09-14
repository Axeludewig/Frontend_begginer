/*  elements.map( (nodo) => {
  console.log("nodo", nodo)
 })

 const nuevoArreglo = Array.of(elements);

console.log("nuevoArreglo", nuevoArreglo)

 nuevoArreglo.map( (nodo) => {
  console.log("nodo", nodo)
 }) */


const elements = document.querySelectorAll(".img-container");

console.log("elements", elements)

const mover = document.querySelector(".button1"); // SELECTOR BOTÓN MOVER
mover.addEventListener("click", function() {
  var x; // EL BOTÓN CAMBIAR PRIMERO DECLARA UNA VARIABLE X
  x = Math.floor(Math.random() * 10);  // Y LE ASIGNA UN VALOR ALEATORIO ENTRE 1 Y 9 A ESA VARIABLE X
  elements[x].style.gridArea = "1" // POSTERIORMENTE EL ELEMENTO X (RANDOM 1-9) SE MUEVE AL GRID AREA 1

})

const reset = document.querySelector(".button2"); // SELECTOR BOTÓN RESET
reset.addEventListener("click", function() {
  document.location.reload(true); // BOTÓN RESETEAR, SIMPLEMENTE REFRESCA EL DOCUMENTO
})