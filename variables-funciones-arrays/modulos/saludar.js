
function saludar(nombre_persona) {
    let saludo = "hola " + nombre_persona

    // PI = 123
    function otraFuncion() {
        var variable123OtraFuncion = "pepe"
        console.log(variable123OtraFuncion)
        console.log(saludo)
        console.log(nombre)
    }

    if (true) {
        let variableEnBloqueIf = false;
        console.log(saludo)
        console.log(variableEnBloqueIf)
    }

    // let saludo = "otro saludo"


    // console.log(variable123OtraFuncion)

    // console.log(saludo)
    return saludo
}


module.exports = saludar