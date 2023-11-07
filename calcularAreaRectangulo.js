//función para Calcular el área de un rectángulo


function calcularAreaRectangulo(base, altura) {
    if (base <= 0 || altura <= '0') {
        throw new Error("La base y la altura deben ser valores positivos");
    }
    return base * altura;
}

module.exports = calcularAreaRectangulo;

//El área de un rectángulo 3x4 debe ser 12
//El área de un rectángulo 5x10 debe ser 50
//El área de un rectángulo 6x8 debe ser 48
//El área con base cero debe lanzar un error
//El área con altura negativa debe lanzar un error

