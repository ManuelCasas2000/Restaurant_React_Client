import { useQuery } from "@tanstack/react-query";
import { dishesApi } from "../api/dishesApi";
import { sleep } from "../helpers/sleep";

const getDishes = async() => {
    await sleep(2);
    const {data} = await dishesApi.get();
    return data;
}

export const useDishes = () => {

    const dishesQuery = useQuery(
        ['dishes'],
        getDishes
    )
return dishesQuery



}
