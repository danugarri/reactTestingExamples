import '@testing-library/jest-dom'; // según óscar esto es para asegurar que nos cargan todas las funcionalidades
import {getUser} from '../base/functionTest'
describe('Pruebas', () => {
    test('prueba de funciones', () => { 
        const userTest= {
            id: 'ABC123',
            userName: 'Celia'
            };
        const user= getUser();
        console.log(user);
        expect(userTest).toEqual(user);
     })
})