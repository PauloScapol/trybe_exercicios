const {sum, sub, mult, div} = require('./calculator');

describe('Todas as equações estão funcionando', () => {
    it('Soma de 1 e 2 é 3', () => {
        expect(sum(1,2)).toBe(3);
    });
    it('Subtração de 3 e 2 é 1', () => {
        expect(sub(3,2)).toBe(1);
    });
    it('Multiplicação de 5 e 5 é 25', () => {
        expect(mult(5,5)).toBe(25);
    });
});

describe('Teste das ramificações da função div', () => {
    it('Divisão de 10 e 5 é 2', () => {
        expect(div(10,5)).toBe(2);
    });
    it('Mostra erro quando divisão por ZERO', () => {
        expect(() => div(1,0)).toThrow(Error);
    });
});