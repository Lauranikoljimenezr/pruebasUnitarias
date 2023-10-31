// Esta función encuentra todos los números primos en un rango de 2 a 'n'.
function encontrarPrimos(n) {
    if (n < 0) {
        throw new Error("No se puede calcular los números primos de un número negativo");
    }

    const primos = [];
    for (let num = 2; num <= n; num++) {
        let esPrimo = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos.push(num);
        }
    }
    return primos;
}

module.exports = encontrarPrimos;

//prueva unutaria
//numeros primos hasta el 10
//numeros primos hasta el 20
//numeros primos hasta el 1
//numeros primos hasta el numero negativo debe lanzar un error
//números primos hasta el 30

