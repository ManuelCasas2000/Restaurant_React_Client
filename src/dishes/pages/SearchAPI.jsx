import { Charging } from "../components/Charging";
import { DishListAll } from "../components/DishListAll";
import { LoadingIcon } from "../components/LoadingIcon";
import { useDishes } from "../hooks/useDishes";

export const SearchAPI = () => {
    const dishes = useDishes();

  return (
    <>
      <div className="alert alert-dark mt-5 animate__animated animate__fadeIn"><h1>These are our seafood dishes by API-Rest using React Query</h1></div><br />
      <hr />
      <div className="row  animate__animated animate__fadeIn">
        <div className="col-12">
        </div>
        <br /><br /><hr /><br />            
        <div className="col-12">
        {
          dishes.isLoading
          ? (<LoadingIcon/>)
          : (<DishListAll result={dishes.data}></DishListAll>)
        }
        </div>
      </div>
      <br /><br />

    </>
  )
}
