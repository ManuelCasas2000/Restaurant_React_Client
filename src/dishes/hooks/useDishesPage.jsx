import { useQuery } from "@tanstack/react-query";
import { dishesApi } from "../api/dishesApi";
import { sleep } from "../helpers/sleep";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializePage, increasePage, decreasePage, changePage } from "../../store/ui/pageSlice";

const getDishesPage = async({page=1}) => {
    await sleep(1);
    const params = new URLSearchParams();

    params.append('page', page.toString());
    params.append('limit', '2')
    console.log("page ----------------------------------",page);
    const {data} = await dishesApi.get('/bypage', {params});
    console.log("data ------------------------------", data);
    return data;
}


export const useDishesPage = () => {
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();
    const {pageGo} = useSelector(state => state.currentPage);

    useEffect( () => {
        setPage(page);
    },[page]);

    
    const dishesQuery = useQuery(
        ['dishes',{page:page}],
        () => getDishesPage({page}),
    );

    const nextPage = () => {
        console.log("Entra en   useDishesPage - nextPage - pageGo: ", pageGo);
        if(dishesQuery.data?.length === 0) return;
        setPage( page +1);
        dispatch(changePage(page +1));
    }
    
    const prevPage = () => {
        if(page > 1) {
            setPage(page -1);
            dispatch(changePage(page -1));
        }
    }
    
return {
    // Properties
    dishesQuery,
    // Getter
    page: dishesQuery.isLoading ? 'Loading': page,
    // Methods
    nextPage,
    prevPage,
    getDishesPage,
    setPage
}
}
