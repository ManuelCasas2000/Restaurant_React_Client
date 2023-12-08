
import { useAuthStore } from "../hooks/useAuthStore"
import {Link, NavLink, useNavigate} from 'react-router-dom'

export const NavBarCalendar = () => {

    const {startLogout, user} = useAuthStore();
    console.log("NavBarCalendar -> user.name --->>> ", user.name);

    const navigate = useNavigate();

    const goHome = () => {
        console.log("Go Home");
        navigate('/', {
            replace: true
        });
    }

    return (
        <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <button 
            className="btn btn-outline-secondary"
            onClick={goHome}>
        <i className="fas fa-home"></i>
        </button>
        <button 
            className="btn btn-outline-danger"
            onClick={startLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span>Salir</span>
        </button>
        </div>
        )
    }