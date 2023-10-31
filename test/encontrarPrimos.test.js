const encontrarPrimos = require('../encontrarPrimos');

test('Números primos hasta el 10', () => {
    expect(encontrarPrimos(10)).toEqual([2, 3, 5, 7]);
});

test('Números primos hasta el 20', () => {
    expect(encontrarPrimos(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
});

test('Números primos hasta el 1', () => {
    expect(encontrarPrimos(1)).toEqual([]);
});

test('Números primos hasta el 30', () => {
    expect(encontrarPrimos(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});

test('Números primos hasta el número negativo debe lanzar un error', () => {
    expect(() => encontrarPrimos(-5)).toThrow("No se puede calcular los números primos de un número negativo");
});

