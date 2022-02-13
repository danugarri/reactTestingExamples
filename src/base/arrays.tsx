export const heroes = [
    {
        id: 1,
        name: 'batman',
        owner: 'DC'
    },
     {
        id:2,
        name: 'spiderman',
        owner: 'marvel',
    },
    {
        id:3,
        name: 'iron man',
        owner: 'marvel',
    }

]
export const getHeroesById = (id) => heroes.find(heroe => heroe.id === id); //devuelve el primer elemento que coincida, aunque haya varios que coincidan
export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);// devuelve todos los elementos que coincidan