
import {Link, NavLink, useNavigate} from 'react-router-dom'
import { useAuthStore } from '../../calendar/hooks/useAuthStore';


export const NavBar = () => {

    const {startLogout, user} = useAuthStore();
    const navigate = useNavigate();
    const {status, checkAuthToken} = useAuthStore();


    const onLogin = () => {
        console.log("Logout");
        navigate('/auth/login', {
            replace: true
        });
    }

    const nameNavbar = (
        (user.name !== undefined)
        ? 'Hello, ' + user.name
        : 'Bookings'
    );

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
    <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <Link
            className="navbar-brand"
            to="/"
        >
            Restaurant
        </Link>
        <div className="navbar-collapse">
            <div className="navbar-nav">
                <NavLink
                    className={({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                    to="/pasta"
                >
                    Pasta
                </NavLink>
                <NavLink
                    className={({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                    to="/seafood"
                >
                    Seafood
                </NavLink>
                {/* <NavLink
                    className={({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                    to="/dish"
                >
                    Dish
                </NavLink> */}
                <NavLink
                    className={({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                    to="/search"
                >
                    Search
                </NavLink>
                <NavLink
                    className={({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                    to="/searchReactQuery"
                >
                    SearchAPI
                </NavLink>
                <NavLink
                    className={({isActive}) => `nav-item nav-link ${ isActive ? 'active' : ''}`}
                    to="/searchReactQueryPagination"
                >
                    SearchAPIandPagination
                </NavLink>
            </div>
        </div>
        <div className="navbar-collapse collapse w-100 order-4 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
                <NavLink
                    className="nav-item nav-link userNavBar"
                    style = {{  display: (status === "authenticated")? '' : 'none' }}
                >
                    Hello,&nbsp;{user.name}
                </NavLink>
            <button 
                className="nav-item nav-link btn"
                onClick={onLogin}
            >   
                Bookings
            </button>
            </ul>
        </div>
    </div>
    </div>
    </nav>
  )
}
