import { useEffect } from 'react';
import { useMemo } from 'react';
import { dishes } from '../data/dishes';


export const getDishesValues = (glutenValue,priceValue,searchText) => {


    const dishesMemorized = useMemo(() => dishes, [dishes]);
  
    return dishesMemorized.filter(dish => dish.cathegory === "Seafood")
                          .filter(dish => dish.name.toLowerCase().includes(searchText))
                          .filter(function(dish) {
                            if(glutenValue === "all" || glutenValue === "") return true;
                            else return dish.gluten === glutenValue
                          })
                          .filter(function(dish) {
                            if(priceValue === "") return true;
                            else return dish.price <= priceValue
                          })

}
