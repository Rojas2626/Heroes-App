import {heroes} from '../data/heroes'

export const getHeroesByName = (name = '') => {

    const names = name.toLowerCase().trim()

    if(names.length === 0) return [];
    return heroes.filter( 
        hero => hero.superhero.toLowerCase().includes(names)
    )
}