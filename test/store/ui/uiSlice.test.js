import { onCloseDateModal, onOpenDateModal, uiSlice } from "../../../src/store/ui/uiSlice"

describe('Pruebas en uiSlice', () => {
    test('Debe devolver el estado por defecto', () => {
        // console.log(uiSlice.getInitialState());
        expect(uiSlice.getInitialState()).toEqual({ isDateModalOpen: false });
        expect(uiSlice.getInitialState().isDateModalOpen).toBeFalsy();
    });

    test('Debe de cambiar isDatoModalOpen correctamente', () => {
        let state = uiSlice.getInitialState();
        state = uiSlice.reducer(state, onOpenDateModal());
        // console.log(state);
        expect(state.isDateModalOpen).toBeTruthy();
        
        state = uiSlice.reducer(state,onCloseDateModal());
        // console.log(state);
        expect(state.isDateModalOpen).toBeFalsy();
    });
})