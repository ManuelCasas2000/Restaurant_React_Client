import React from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";

export const DishCardFile = ({
    id,
    name,
    image,
    idMeal,
    cathegory,
    instructions,
    text
}) => {

    const navigate = useNavigate();
    
  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className='card mb-3'>
            <div className='row no gutters'>
                <div className='col-4'>
                    <img src={image}  className="img-thumbnail mt-2 ms-2 mb-2" alt={name} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{text}</p>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => navigate(`/dish/${id}`)}>
                            + info
                        </button>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}
