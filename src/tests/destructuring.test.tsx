import { getArray } from "../base/destructuring";

describe('Pruebas destructuring', () => {
    test('Comprobar array', () => { 
        const [letra,numero] = ['abc',123]
        const myArray= getArray();
        expect(numero).toBe(123);
        expect(letra).toBe('abc');
        expect(myArray).toEqual(['abc',123]);
     })
     test('Debe ser del tipo string', () => {
        const [letra] = ['abc']
        expect(typeof letra).toBe('string');
     })
     test('Debe ser del tipo number', () => { 
        const [numero] = [123]
        expect(typeof numero).toBe('number');
      })
})