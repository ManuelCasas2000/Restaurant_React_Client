import { configureStore } from "@reduxjs/toolkit";
import { act, renderHook } from "@testing-library/react"
import { Provider } from "react-redux";
import { useUiStore } from "../../src/calendar/hooks/useUiStore";
import { store, uiSlice } from "../../src/store";

const getMockStore = (initialState) => {
    return configureStore({
        reducer: {
            ui: uiSlice.reducer
        },
        preloadedState: {
            ui: {...initialState}
        }
    })
}

describe('Pruebas del componente useUiStore', () => {
    test('Debe de devolver los valores por defecto', () => {

        const mockStore = getMockStore({isDateModalOpen: false});
        const {result} = renderHook(() => useUiStore(), {
            // wrapper: ({children}) => <Provider store = {store}>{children}</Provider>
            wrapper: ({children}) => <Provider store = {mockStore}>{children}</Provider>
        });
        console.log(result);
        // {
        //     current: {
        //       isDateModalOpen: false,
        //       openDateModal: [Function: openDateModal],
        //       closeDateModal: [Function: closeDateModal],
        //       toggleDateModal: [Function: toggleDateModal]
        //     }
        // }
        expect(result.current).toEqual({
            isDateModalOpen: false,
            openDateModal: expect.any(Function),
            closeDateModal: expect.any(Function),
            toggleDateModal: expect.any(Function),
        });
    });

    test('openDateModal debe poner true en isDateModalOpen', () => {
        const mockStore = getMockStore({isDateModalOpen: false});
        const {result} = renderHook(() => useUiStore(), {
            // wrapper: ({children}) => <Provider store = {store}>{children}</Provider>
            wrapper: ({children}) => <Provider store = {mockStore}>{children}</Provider>
        });
        
        // const {isDateModalOpen, openDateModal} = result.current; // Nota importante: Estos valores son primitivos y no cambian cuando se llama a una función. Con objetos si funciona
        const {openDateModal} = result.current;
        act( () => {
            openDateModal();
        });
        // console.log({result: result.current, isDateModalOpen});
        console.log({result: result.current});
        // {
        //     result: {
        //       isDateModalOpen: true,
        //       openDateModal: [Function: openDateModal],
        //       closeDateModal: [Function: closeDateModal],
        //       toggleDateModal: [Function: toggleDateModal]
        //     },
        //     isDateModalOpen: false --->> const {isDateModalOpen, ...... Es false porque al ser un primitivo no cambia después de llamar a la función 
        //   }
        expect(result.current.isDateModalOpen).toBeTruthy();
    });

    test('closeDateModal debe poner false en isDateModalOpen', () => {
        const mockStore = getMockStore({isDateModalOpen: true});
        const {result} = renderHook(() => useUiStore(), {
            wrapper: ({children}) => <Provider store = {mockStore}>{children}</Provider>
        });
        act( () => {
            result.current.closeDateModal();
        });
        console.log({result: result.current});
        expect(result.current.isDateModalOpen).toBeFalsy();
    });

    test('toggleDateModal debe de cambiar el estado', () => {
        const mockStore = getMockStore({isDateModalOpen: true});
        const {result} = renderHook(() => useUiStore(), {
            wrapper: ({children}) => <Provider store = {mockStore}>{children}</Provider>
        });
        act( () => {
            result.current.toggleDateModal();
        });
        expect(result.current.isDateModalOpen).toBeFalsy();
        act( () => {
            result.current.toggleDateModal();
        });
        expect(result.current.isDateModalOpen).toBeTruthy();
    });
});
