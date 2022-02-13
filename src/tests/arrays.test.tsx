import { getHeroesById,heroes } from "../base/arrays";

describe('Pruebas de arrays', () => {
    test('Debe retornar un héroe por id', () => { 
        const id= 1;
        const heroe= getHeroesById(id);
       
        const heroesData = heroes.find(heroe => heroe.id === id);
        console.log(heroesData)
        
        expect(heroe).toEqual(heroesData);
     });
     test('Debe retornar undefined', () => { 
         // este test sería muy útil en la práctica, ya que nos permite saber si existe el id que buscamos o no
        const id= 5;
        
        const heroesData = heroes.find(heroe => heroe.id === id);
        console.log(heroesData)
        expect(heroesData).toBe(undefined);

      });
      test('Debe comprobar que hay 2 héroes de marvel', () => { 
        const heroesData = heroes.filter(heroe => heroe.owner ==='marvel'); //esto devolverá los hérores que sean de marvel
        const amountHeroes= heroesData.length === 2
        console.log(heroesData)
        expect(amountHeroes).toBe(true);

       })
})