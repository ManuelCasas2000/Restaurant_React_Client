
export const SearchMultiple = ({changeHandler, searchText, glutenValue, priceValue}) => {

    return (
        <>
        <div className='row'>
        <div className='col-12'>
            <form>
                <div className="searchM">
                    <input
                        id="searchInput"
                        type="text"
                        name="search"
                        placeholder="Filtrar plato por nombre ..."
                        value={searchText}
                        onChange={changeHandler}
                    />
                    <select values={glutenValue} onChange={changeHandler} id="glutenSelect">
                        <option selected="selected" value="all">Con y sin gluten</option>
                        <option value="si">Con gluten</option>
                        <option value="no">Sin gluten</option>
                    </select>
                    <select values={priceValue} onChange={changeHandler} id="priceSelect">
                        <option selected="selected" value="35">Menos de 35€</option>
                        <option value="25">Menos de 25€</option>
                        <option value="15">Menos de 15€</option>
                    </select>
                </div>
            </form>  
        </div>
        </div>
        </>


    )
}