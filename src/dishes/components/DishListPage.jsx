import { useMemo } from "react";
import { getDishesFiltered } from "../helpers/getDishesFiltered";
import { DishCard } from "./DishCard";
import queryString from 'query-string';
import { dishes } from '../data/dishes';
import { getDishesValues } from "../helpers/getDishesValues";
import { useDishes } from "../hooks/useDishes";
import { LoadingIcon } from "./LoadingIcon";
import { useDishesPage } from "../hooks/useDishesPage";

export const DishListPage = ({result, currentPage}) => {

  console.log("DishListPage -------currentPage----------", currentPage);

  return (
    <ul>
        <div className="row rows-cols-1 row-cols-md-1 g-3 animate__animated animate__fadeIn">
            <div className=" col-xs-12 col-sm-12 col-md=12 mb-2">
              {result.map(dish => (
                <DishCard
                    key={dish.id}
                    {...dish}
                    currentPage={currentPage}
                />
              ))}
            </div>
        </div>
    </ul>
  )
}
