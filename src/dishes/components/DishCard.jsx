import { useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getDishDetail } from '../helpers/getDishById';

export const DishCard = ({
    id,
    name,
    image,
    idMeal,
    cathegory,
    instructions,
    texto,
    currentPage
}) => {

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const preSetData = () => {
        console.log("Ha entrado");
        document.body.style.cursor = 'pointer';
        queryClient.prefetchQuery(
            ['dishes', String(id)],
            //id,
            () => getDishDetail({id}),
            {
                updatedAt: new Date().getTime() + 100000
            }
        )
    }

    const divOut = () => {
        document.body.style.cursor = 'default';
    }
    
  return (
    <div className='col animate__animated animate__fadeIn'>
        <div 
            className='card mb-3'
            onMouseEnter={preSetData}
            onMouseLeave={divOut}
        >
            <div className='row no gutters'>
                <div className='col-2'>
                    <img src={image}  className="img-thumbnail mt-2 ms-2 mb-2" alt={name} width="150" height="150"/>
                </div>
                <div className="col-10">
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <p className="card-text">{texto}</p>
                        <button
                            className="btn btn-outline-secondary"
                            onClick={() => navigate(`/dish/${id}/${currentPage}`)}>
                            + info
                        </button>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}
