
import React, { useEffect, useMemo, useState } from 'react'
import { SearchMultiple } from './SearchMultiple';
import { DishListAll } from '../components/DishListAll';
import { dishes } from '../data/dishes';
import { Charging } from '../components/Charging';

export const SeafoodPage = () => {

  const dishesMemorized = useMemo(() => dishes, [dishes]);

  const [searchText, setSearchText] = useState("");
  const [glutenValue, setGlutenValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
      setIsLoading(true);
      const results = dishesMemorized.filter(dish => dish.cathegory === "Seafood")
                                    .filter(dish => dish.name.toLowerCase().includes(searchText))
                                    .filter(function(dish) {
                                      if(glutenValue === "all" || glutenValue === "") return true;
                                      else return dish.gluten === glutenValue
                                    })
                                    .filter(function(dish) {
                                      if(priceValue === "") return true;
                                      else return dish.price <= priceValue
                                    });
      setSearchResults(results);
      setTimeout(() => {
        setIsLoading(false);}
      ,200);
  }, [searchText,glutenValue,priceValue]);

  const onChangeHandler = (event) => {
    if(event.target.id === "glutenSelect"){
      setGlutenValue(event.target.value);
    } else if (event.target.id === "searchInput") {
      setSearchText(event.target.value);
    } else if (event.target.id === "priceSelect") {
      setPriceValue(event.target.value);
    }
  };

  return (
    <>
      <div className="alert alert-dark mt-5 animate__animated animate__fadeIn"><h1>These are our seafood dishes</h1></div><br />
      <hr />
      <div className="row  animate__animated animate__fadeIn">
        <div className="col-12">
          <SearchMultiple changeHandler={onChangeHandler} searchText={searchText} glutenValue={glutenValue} priceValue={priceValue}></SearchMultiple>
        </div>
        <br /><br /><hr /><br />            
        <div className="col-12">
          {
            isLoading
              ? <Charging/>
              : <DishListAll result={searchResults}></DishListAll>
          }
        </div>
      </div>
      <br /><br />

    </>
  )
}
