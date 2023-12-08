import { authSlice, clearErrorMessage, onLogin, onLogout } from "../../../src/store/auth/authSlice"
import { authenticatedState, initialState, notAuthenticatedState } from "../../fixtures/authStates"
import { testUserCredentials } from "../../fixtures/testUser";

describe('Pruebas en authSlice', () => {
    test('Debe de mostrar el estado inicial', () => {
        expect(authSlice.getInitialState()).toEqual(initialState); // Uso toEqual para comparar objetos
    });

    test('Debe de realizar un login', () => {
        const state = authSlice.reducer(initialState, onLogin(testUserCredentials));
        // console.log(state);
        // {
        //     status: 'authenticated',
        //     user: {
        //       email: 'test@correo.es',
        //       password: '1234',
        //       uid: '641afb8c74589ec304c690a9',
        //       name: 'Test User'
        //     },
        //     errorMessage: null
        //  }
        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: null
        })
    });

    test('Debe de realizar el logout', () => {
        const state = authSlice.reducer(authenticatedState, onLogout());
        // console.log(state);
        // { status: 'not-authenticated', user: {}, errorMessage: undefined }
        expect(state).toEqual({
            status: 'not-authenticated', 
            user: {}, 
            errorMessage: undefined
        })
    });

    test('Debe de realizar el logout con algún mensaje de error', () => {
        const errorMessage = 'Credenciales no válidas'
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
        // console.log(state);
        // {
        //     status: 'not-authenticated',
        //     user: {},
        //     errorMessage: 'Credenciales no válidas'
        // }
        expect(state).toEqual({
            status: 'not-authenticated', 
            user: {}, 
            errorMessage: errorMessage
        })
    });

    test('Debe de limpiar el mensaje de error', () => {
        const errorMessage = 'Credenciales no válidas';
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
        const newState = authSlice.reducer(state, clearErrorMessage() )
        expect(newState.errorMessage).toBe(undefined);
    });
})