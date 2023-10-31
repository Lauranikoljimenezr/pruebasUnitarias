const calcularAreaRectangulo = require('../calcularAreaRectangulo');

test('El área de un rectángulo 3x4 debe ser 12', () => {
    expect(calcularAreaRectangulo(3, 4)).toBe(12);
});

test('El área de un rectángulo 5x10 debe ser 50', () => {
    expect(calcularAreaRectangulo(5, 10)).toBe(50);
});

test('El área de un rectángulo 6x8 debe ser 48', () => {
    expect(calcularAreaRectangulo(6, 8)).toBe(48);
});

test('El área con base cero debe lanzar un error', () => {
    expect(() => calcularAreaRectangulo(0, 7)).toThrow("La base y la altura deben ser valores positivos");
});

test('El área con altura negativa debe lanzar un error', () => {
    expect(() => calcularAreaRectangulo(4, -3)).toThrow("La base y la altura deben ser valores positivos");
});