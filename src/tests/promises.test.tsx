import { getHeroesByIdAsync } from "../base/promises";
import {heroes} from '../base/arrays';

// test('Retorna un héroe',(done) => { 
    /* usamos el done como argumento de la arrow function para indicarle al test donde parar dentro de la promesa
    */
describe('Prueba promesas', () => {
    test('Retorna un héroe',(done) => { 
        const id =1;// como este id sí existe en el array, entra en el then y pasa el test
        // si ese id no existiera entraría en el then pero no pasaría el test
         getHeroesByIdAsync(id)
        .then(heroe => {
            console.log(heroe);
            expect(heroe).toBe(heroes[0]);
            done();
           
        } )
       
     });
     test('No existe ese héroe y entra en el catch', (done) => {
        const id =4; // como este id no existe en el array pasará el test
        getHeroesByIdAsync(id)
        .catch(error =>{ 
            console.log(error);
            expect(error).toBe('No existe ese héroe');
            done();
            
        })
     })
})