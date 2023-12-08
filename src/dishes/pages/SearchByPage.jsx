import { useSelector } from "react-redux";
import { Charging } from "../components/Charging";
import { DishListAll } from "../components/DishListAll";
import { DishListPage } from "../components/DishListPage";
import { LoadingIcon } from "../components/LoadingIcon";
import { useDishes } from "../hooks/useDishes";
import { useDishesPage } from "../hooks/useDishesPage";
import { useEffect } from "react";


export const SearchByPage = () => {
   
    const {dishesQuery, page, nextPage,prevPage, setPage} = useDishesPage();
    
    const {pageGo} = useSelector(state => state.currentPage);

    useEffect(() => {
      setPage(pageGo)
    }, [pageGo])

  return (
    <>
      <div className="alert alert-dark mt-5 animate__animated animate__fadeIn"><h1>These are our seafood dishes by API-Rest using React Query and Pagination</h1></div><br />
      <hr />
      <div className="row  animate__animated animate__fadeIn">
        <div className="col-12">
        </div>
        <br /><br /><hr /><br />            
        <div className="col-12">
        {
                dishesQuery.isLoading
                ? (<LoadingIcon/>)
                : (<DishListPage result={dishesQuery.data || []} currentPage={page}></DishListPage>)
        }

        </div>
        <div className='d-flex mt-2 justify-content-between aling-items-center'>
          <button 
            className='btn btn-outline-secondary'
            disabled={dishesQuery.isFetching}
            onClick={prevPage}
          >Prev</button>
          <span>{page}</span>
          <button 
            className='btn btn-outline-secondary'
            disabled={dishesQuery.isFetching}
            onClick={() => nextPage()} 
          >Next</button>
        </div>
      </div>
      <br /><br />

    </>
  )
}
