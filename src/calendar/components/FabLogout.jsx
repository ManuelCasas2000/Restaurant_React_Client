import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../calendar';

export const FabLogout = () => {
    const {isDateModalOpen} = useSelector(state => state.ui);
    const {startLogout, user} = useAuthStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("FabLogout -> LogoutSalir......");
        startLogout();
        navigate('/', {
            replace: true
        });
    }
  return (
    <button
        className="btn btn-outline-secondary fab-logout"
        onClick={handleLogout}
    >
        <i className="fas fa-sign-out-alt"></i>
        <span>Logout</span>
    </button>
  )
}
