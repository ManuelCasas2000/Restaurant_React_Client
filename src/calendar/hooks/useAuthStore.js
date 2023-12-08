import { useDispatch, useSelector } from "react-redux"
import { bookingApi } from '../../api/bookingApi';
import { onChecking, onLogin, onLogout, clearErrorMessage, logout, onAddDishe } from '../../store/auth/authSlice';
import { onLogoutCalendar } from "../../store/calendar/calendarSlice";

export const useAuthStore = () => {
    const {status, user, errorMessage, dishes} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {
        dispatch(onChecking());
        try {
            const {data} = await bookingApi.post('/auth', {email, password});
            localStorage.setItem('token',data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name:data.name, uid:data.uid}));
        } catch (error) {
            console.log(error);
            dispatch(onLogout('Credenciales incorrectas.'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            },10);
        }
    }

    const startRegister = async({name,email,password}) => {
        dispatch(onChecking());
        try {
            const {data} = await bookingApi.post('/auth/new', {name, email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({name: data.name, uid:data.uid}));
        } catch (error) {
            console.log(error);
            dispatch(onLogout(error.response.data?.msg|| 'No hay mensaje en el error.response'));
            
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if(!token) {
            console.log('checkAuthToken -> No hay token');
            return dispatch(onLogout());
        }
        try {
            const {data} = await bookingApi.get('auth/renew');
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date',  new Date().getTime());
            dispatch(onLogin({name:data.name, uid:data.uid}));

        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(logout());
        dispatch(onLogoutCalendar());
    }

    const addDishe = (dishBooking) => {
        console.log("addDishe", dishBooking);
        dispatch(onAddDishe({dish:dishBooking}))
    }

    return {
        // Propiedades
        errorMessage,
        status,
        user,
        dishes,
        // Metodos
        addDishe,
        checkAuthToken,
        startLogin,
        startLogout,
        startRegister,
    }
}
