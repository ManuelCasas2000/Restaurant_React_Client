import {dishes} from '../data/dishes';

export const getDishesByCategory = (cathegory) => {
    const validCathegory = ['Pasta','Seafood'];
    if(!validCathegory.includes(cathegory)) {
        throw new Error(`La categoria ${cathegory} del argumento no existe.`);
    }

    return dishes.filter(dishe => dishe.cathegory === cathegory);

}

