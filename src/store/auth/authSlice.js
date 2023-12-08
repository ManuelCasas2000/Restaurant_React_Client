import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', // 'checking', 'autheticated', 'not-autheticated
        user: {},
        errorMessage: null,
        dishes: [], 
    },
    reducers: {
        // Revisar login
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.displayName = payload.displayName;
            state.errorMessage = null;
        },
        onLogin: (state, {payload}) => {
            state.status = 'authenticated';
            state.user = payload;
            state.errorMessage = null;
        },
        // Revisar logout
        logout: (state, payload) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.errorMessage = payload.errorMessage;

        },
        onLogout: (state, {payload}) => {
            state.status = 'not-authenticated';
            state.user = {};
            state.errorMessage = payload;
        },
        // Revisar checkingCredentials
        checkingCredentials: (state) => {
            state.status = 'checking';
        },
        onChecking: (state) => {
            state.status = 'checking';
            state.user = {};
            state.errorMessage = undefined
        },
        clearErrorMessage: (state) => {
            state.errorMessage = undefined;
        },
        onAddDishe: (state,{payload}) => {
            state.dishes.push(payload.dish);
        },
        onDeleteDishe: (state) => {
            state.dishes = [];
        }
    }
});
export const { login, logout, checkingCredentials,onLogin, onChecking, onLogout, clearErrorMessage, onAddDishe, onDeleteDishe } = authSlice.actions;