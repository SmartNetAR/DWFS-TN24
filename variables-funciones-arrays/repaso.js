// Variables (var, let, const) javascript

const saludar = require("./modulos/saludar")


// almacenan valores

// var -> alcance o scope global o de función

// let, const idem var + el de bloque {} se agregan en ES2015 ES6

var nombre = "juan"
const PI = 3.1416

const juan = nombre // guarda "juan" por siempre

nombre = "maría "

console.log(nombre.toUpperCase())

console.log(nombre.charAt(0).toUpperCase() + nombre.slice(1))

// guardo un saludo que viene de la funcion saludar
const saludo = saludar("DH")

console.log(saludo)

// modulos (node) modules.export / require