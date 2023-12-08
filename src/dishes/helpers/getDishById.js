import { useQuery } from '@tanstack/react-query';
import {dishes} from '../data/dishes';
import { sleep } from './sleep';
import { dishesApi } from '../api/dishesApi';

// Version que accedia a fichero \data\dishes.js para leer la información
// export const getDishById = (id) => {
//   return dishes.find(dish => dish.id === id);
// }


export const getDishDetail = async ({id}) => {
  await sleep(1);
  const params = new URLSearchParams();
  params.append('id',id);
  const {data} = await dishesApi.get('/byid', {params});
  return data;


}

export const getDishById = (id) => {

  const dish = useQuery(
    ['dishes',id],
    () => getDishDetail({id}),
);

return {dish};
}
