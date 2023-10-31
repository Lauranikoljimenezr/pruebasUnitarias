const celsiusAFahrenheit = require('../celsiusAFahrenheit');

test('Convertir 0°C a Fahrenheit', () => {
    expect(celsiusAFahrenheit(0)).toBe(32);
});

test('Convertir 20°C a Fahrenheit', () => {
    expect(celsiusAFahrenheit(20)).toBe(68);
});

test('Convertir -10°C a Fahrenheit', () => {
    expect(celsiusAFahrenheit(-10)).toBe(14);
});

test('Convertir 100°C a Fahrenheit', () => {
    expect(celsiusAFahrenheit(100)).toBe(212);
});

test('Convertir 37°C a Fahrenheit', () => {
    expect(celsiusAFahrenheit(37)).toBe(98.6);
});