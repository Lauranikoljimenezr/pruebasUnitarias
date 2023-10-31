// Esta función calcula el factorial de un número entero no negativo.

function factorial(n) {
    if (n < 0) {
        throw new Error("No se puede calcular el factorial de un número negativo");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

module.exports = factorial;


//pruebas unitarias
// factorial de 0 debe ser 1
//factorial de 5 debe ser 120
//factorial de numero negativo debe lanzar error
//factorial de 1 debe ser 1
//factorial de 10 debe ser 36288000