import { DishList } from "../components/DishList"

export const PastaPage = () => {
    return (
        <>
            <div className="alert alert-dark mt-5 animate__animated animate__fadeIn"><h1>These are our pasta dishes</h1></div><br />
            <hr />
            <DishList cathegory='Pasta'/>
            <br /><br />
        </>
    )
}
