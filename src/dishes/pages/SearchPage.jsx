import { useLocation, useNavigate } from 'react-router-dom';
import {useForm} from '../hooks/useForm';
import queryString from 'query-string';
import { getDishByName } from '../helpers/getDishByName';
import { DishCardFile } from '../components/DishCardFile';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q=''} = queryString.parse(location.search);

  const dishes = getDishByName(q);

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && (dishes.length === 0);

  
  const {searchText, onInputChange} = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if(searchText.trim().length <= 2) return;
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }


  return (
    <>
      <div className="alert alert-dark mt-5 animate__animated animate__bounceInDown"><h1>Search your dishes by name</h1></div><br />
      <hr />
      <div className="row  animate__animated animate__fadeIn">
        <div className="col-4">
          <form onClick={onSearchSubmit} aria-label="form">
            <input 
              type="text" 
              placeholder="Search a dish"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange} 
            />
            <button className="btn btn-outline-secondary mt-3">Search</button>
          </form>
        </div>
        <div className="col-8">
          <div 
            className="alert alert-secondary animate__animated animate_fadeIn"
            style={{display: showSearch ? '': 'none'}}  
          >
          </div>
          <div
            aria-label="no-result" 
            className="alert alert-danger animate__animated animate_fadeIn"
            style={{display: showError ? '': 'none'}}
            >
            There is not results with <b>{q}</b>
          </div>
          {
            dishes.map(dish => (
              // <DishCard key={dish.id} {...dish}/>
              <DishCardFile key={dish.id} {...dish}/>
            ))
          }
        </div>
          <div id="altura-search"></div>
      </div>
    </>
  )
}
