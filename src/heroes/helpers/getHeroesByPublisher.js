import { heroes } from '../data/heroes';

export const getHeroesByPublisher = ( publisher ) => {
    const aprovedPublishers = ['DC Comics', 'Marvel Comics'];
    
    if(!aprovedPublishers.includes ( publisher )) {
        throw new error ( `${publisher} is not an aproved publisher`)
    }
    
    return heroes.filter( heroe => heroe.publisher === publisher);
}


