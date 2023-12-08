import { useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"
import Swal from "sweetalert2";
import { useAuthStore } from "../../calendar/hooks/useAuthStore";
import { getDishById } from "../helpers/getDishById";
import { LoadingIcon } from "../components/LoadingIcon";
import {changePage} from "../../store/ui/pageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export const DishPage = () => {
    const {dishId, currentPage, ...rest} = useParams();

    const {dish}= getDishById(dishId);
    const navigate = useNavigate();
    const {status, checkAuthToken} = useAuthStore();
    const {addDishe, errorMessage} = useAuthStore();
    const isAuthenticated = useMemo(() => status === 'authenticated', [status]);
    const dispatch = useDispatch();
    const {pageGo} = useSelector(state => state.currentPage);

  dispatch(changePage(parseInt(currentPage, 10)));
  
    const onNavigateBack = () => {
      navigate(-1, {
        replace:true
      })
    }

    const onSaveDishe = () => {
      Swal.fire('Añadido correctamente', `El plato '${dish.data.name}' se ha añadido a la reserva`, 'success');
      addDishe({dish:dish.data.name});
    }

    const [dishName, setDishName] = useState({
      idDish: dish.id,
      numberDish: ''
    });

    if(!dish) {
      return <navigate to="/pasta"/>
    }
    return (
      <div>
        { 
          dish.isLoading
          ?(<LoadingIcon/>)
          :(
            <div>
            <div className="row mt-5 animate__animated animate__fadeIn">
              <div className="col-4">
                <div>
                  <img src={dish.data.image} alt={dish.data.name} className="img-thumbnail" />
                </div>
                <br />
              <div className="card mt-5 searchM">
                  <button 
                          disabled = {!isAuthenticated}
                          className="botoncard mt-2 mb-2 ms-5 btn btn-secondary btn-lg"
                          onClick={onSaveDishe}
                          >
                          Select
                        </button>
                  <button
                    className="botoncard mt-2 mb-2 ms-2 btn btn-outline-secondary  btn-lg"
                    onClick={onNavigateBack}
                    >
                    Back
                  </button>
              </div>
              </div>
              <div className="card col-8">
                <br />
                <h3>{dish.data.name}</h3>
                <p className="card-text">{dish.data.instructions}</p>
                <br />
                <h5>Ingredients</h5>
                <p className="card-text">{dish.data.ingredients}</p>
                <h5>It contains gluten </h5>
                <p className="card-text">{dish.data.gluten}</p>
                <h5>Price </h5>
                <p className="card-text">{dish.data.price}€</p>
                <br />
              </div>
            </div>
            <br /><br /><br /><br />
            </div>
          )
        }
      </div>
    )
  }
  