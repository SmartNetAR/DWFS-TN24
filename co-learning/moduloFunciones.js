
const PI = 3.141592653589793;

const e = 2.718281828459045;

const suma = (a, b) => a + b;

// const objeto = { PI: PI, e: e };

// renombrar key
// module.exports = { numeroPI: PI, e: e };

function multiplicar(a, b) {
    return a * b;
}

function obtenerDescuentoGanancias( importe )
{
    if (importe <= 10000)
    {
        return importe - 100;
    }
    else {
        return importe - 500
    }
}

const empleados = [
    {
        nombre: "manuel",
        sueldo: 10000
    },
    {
        nombre: "sabrina",
        sueldo: 15000
    }
]

function obtenerSueldo( empleado, callback )
{
    return "El sueldo de: " + empleado.nombre + "es :" + callback(empleado.sueldo)
}

// console.log(obtenerSueldo(empleados[0], obtenerDescuentoGanancias) )
// console.log(obtenerSueldo(empleados[1], obtenerDescuentoGanancias) )

empleados.forEach( function(empleado){
    console.log(obtenerSueldo(empleado, obtenerDescuentoGanancias))
} )


// empleados.forEach( (empleado) => {
//     console.log(obtenerSueldo(empleado, obtenerDescuentoGanancias))
// } )





module.exports = {
    PI,
    e,
    suma,
    resta: function(a, b){
        return a - b
    },
    multiplicar
};
