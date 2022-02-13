import { getHeroesById } from "./arrays";

export const getHeroesByIdAsync= (id) => {
    return new Promise((success,reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);
            if(heroe) {
                success(heroe)
            }
            else{
                reject('No existe ese héroe');
            }
        }, 1500);
    })
}