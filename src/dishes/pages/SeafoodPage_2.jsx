
import React, { useEffect, useState } from 'react'
import { SearchMultiple } from './SearchMultiple';
import { DishListAll } from '../components/DishListAll';

export const SeafoodPage = () => {

  const [searchText, setSearchText] = useState("");
  const [glutenValue, setGlutenValue] = useState("");
  const [priceValue, setPriceValue] = useState("");

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
          <DishListAll glutenValue={glutenValue} priceValue={priceValue} searchText={searchText}></DishListAll>
        </div>
      </div>
      <br /><br />

    </>
  )
}
