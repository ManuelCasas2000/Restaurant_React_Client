import { useEffect } from 'react';
import { Navigate, Route, Routes,useRoutes } from 'react-router-dom'
import { LoginPage, RegisterPage } from '../auth';
import { useAuthStore, CalendarPage } from '../calendar';
import { Charging } from '../dishes/components/Charging';

export const AuthRoutes = () => {
    const {status, checkAuthToken} = useAuthStore();

    const loginregister = useRoutes([
        {path: 'register', element: <RegisterPage/>},
        {path: 'login', element: <LoginPage/>}
    ]);
    
    useEffect(() => {
        checkAuthToken();
    },[]);

    if(status === 'checking') {
        return (
            <>
                <br /><br /><br />
                <Charging/>
            </>
        )
    }
    
    return (
        <>
            <Routes>
                {
                    (status === 'not-authenticated') 
                    ?( 
                        <>
                            <Route path="login" element={<LoginPage/>}/>
                            <Route path="register" element={<RegisterPage/>}/>
                        </>
                        ) 
                    : (
                        <>
                            <Route path="/" element={<CalendarPage/>}/>
                            <Route path="/*" element={<Navigate to="/calendar"/>}/>
                        </>
                        ) 
                }
                <Route path="/*" element={<Navigate to="/auth/login"/>}/>
            </Routes>
        </>
    )
}