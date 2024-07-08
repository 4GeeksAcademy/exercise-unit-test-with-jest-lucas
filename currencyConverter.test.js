//HAGO EL LLAMADO DE LAS FUNCIONES XD 
const { JPY, USD, GBP } = require('./currencyConverter');

test('converts 10 euros to dollars', () => {
    expect(JPY(10)).toBe(12); // 10 euros * 1.2 = 12 dollars
});

test('converts 10 dollars to yen', () => {
    expect(USD(10)).toBe(1100); // 10 dollars * 110 = 1100 yen
});

test('converts 1000 yen to pounds', () => {
    expect(GBP(1000)).toBe(6.7); // 1000 yen * 0.0067 = 6.7 pounds
});
