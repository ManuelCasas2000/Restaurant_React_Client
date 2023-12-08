import {dishes} from '../data/dishes';

export const getDishByName = (name='') => {
    name = name.toLowerCase().trim();
    if(name.length === 0) return [];
  return dishes.filter(
    dish => dish.name.toLowerCase().includes(name)
  );
}
