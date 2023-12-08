
import {Navigate, Route, Routes} from 'react-router-dom'
import { AuthRoutes } from './AuthRoutes'
import { CalendarRoutes } from './CalendarRoutes'
import { LoginBookingRoutes } from './LoginBookingRoutes';
import { getEnvVaribles } from "../helpers/getEnvVaribles";

export const AppRouter = () => {

    return (
        <>
            <Routes>
                <Route path="/auth/*" element={<AuthRoutes/>}/>
                <Route path="/*" element={<LoginBookingRoutes/>}/>
                <Route path="/calendar/*" element={<CalendarRoutes/>}/>
            </Routes>
        </>
    )
}