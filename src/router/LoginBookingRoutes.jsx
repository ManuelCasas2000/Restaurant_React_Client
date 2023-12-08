
import { Navigate,Route, Routes } from 'react-router-dom'
import { DishPage, PastaPage, SeafoodPage, SearchPage, SearchAPI } from '../dishes'
import { HomePage } from '../dishes/pages/HomePage'
import { NavBar } from '../ui'
import { FooterRestaurant } from '../ui/components/FooterRestaurant'
import { SearchByPage } from '../dishes/pages/SearchByPage'

export const LoginBookingRoutes = () => {
  return (
    <>
        <NavBar/>
        <div className="container">
          <Routes>
              <Route path="/" element={<Navigate to="/home"/>}/>
              <Route path="home" element={<HomePage/>}/>
              <Route path="pasta" element={<PastaPage/>}/>
              <Route path="seafood" element={<SeafoodPage/>}/>
              <Route path="search" element={<SearchPage/>}/>
              <Route path="searchReactQuery" element={<SearchAPI/>}/>
              <Route path="searchReactQueryPagination" element={<SearchByPage/>}/>
              {/* <Route path="dish/:dishId" element={<DishPage/>}/> */}
              <Route path="dish/:dishId/:currentPage" element={<DishPage/>}/>
          </Routes>
        </div>
        <FooterRestaurant/>
    </>
  )
}
