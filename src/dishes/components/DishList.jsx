import React, { useMemo } from 'react'
import { getDishesByCategory } from '../helpers/getDishesByCategory'
import { DishCard } from './DishCard';

export const DishList = ({cathegory}) => {
    const dishes = useMemo(() => getDishesByCategory(cathegory),[cathegory]) ;

  return (
    <ul>
        <div className="row rows-cols-1 row-cols-md-1 g-3 animate__animated animate__fadeIn">
            <div className=" col-xs-12 col-sm-12 col-md=12 mb-2">
            {dishes.map(dish => (
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
