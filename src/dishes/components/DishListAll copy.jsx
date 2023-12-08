import { useMemo } from "react";
import { getDishesFiltered } from "../helpers/getDishesFiltered";
import { DishCard } from "./DishCard";
import queryString from 'query-string';
import { dishes } from '../data/dishes';
import { getDishesValues } from "../helpers/getDishesValues";

export const DishListAll = ({glutenValue,priceValue,searchText}) => {

  const dishesResult = getDishesValues(glutenValue,priceValue,searchText);
  console.log("DishListAll");
  
  return (
    <ul>
        <div className="row rows-cols-1 row-cols-md-1 g-3 animate__animated animate__fadeIn">
            <div className=" col-xs-12 col-sm-12 col-md=12 mb-2">
              {dishesResult.map(dish => (
                <DishCard
                    key={dish.id}
                    {...dish}
                />
              ))}
            </div>
        </div>
    </ul>
  )
}
