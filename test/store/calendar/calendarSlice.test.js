import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendarSlice"
import { initialState, events, calendarWithEventsState, calendarWithActiveEventsState } from "../../fixtures/calendarStates";

describe('Pruebas en calendarSlice' , () => {
    test('Debe de regresar el estado por defecto', () => {
        const state = calendarSlice.getInitialState();
        expect(state).toEqual(initialState);

    });

    test('onSetActiveEvent debe activar la reserva', () => {
        // console.log(calendarWithEventsState);
        // {
            //     isLoadingEvents: false,
            //     events: [
                //       {
                    //         id: '1',
                    //         start: 2022-03-22T15:00:00.000Z,
                    //         end: 2022-03-22T18:00:00.000Z,
                    //         title: 'Ejemplo de title',
                    //         notes: 'Ejemplo de notes'
                    //       },
                    //       {
                        //         id: '2',
                        //         start: 2022-03-23T15:00:00.000Z,
                        //         end: 2022-03-23T18:00:00.000Z,
                        //         title: 'Otro ejemplo de title',
                        //         notes: 'Otro ejemplo de notes'
                        //       }
                        //     ],
                        //     activeEvent: null
        //   }
        const state = calendarSlice.reducer(calendarWithEventsState,onSetActiveEvent(events[0]));
        // console.log(state);
        // {
        //     isLoadingEvents: false,
        //     events: [
        //       {
        //         id: '1',
        //         start: 2022-03-22T15:00:00.000Z,
        //         end: 2022-03-22T18:00:00.000Z,
        //         title: 'Ejemplo de title',
        //         notes: 'Ejemplo de notes'
        //       },
        //       {
        //         id: '2',
        //         start: 2022-03-23T15:00:00.000Z,
        //         end: 2022-03-23T18:00:00.000Z,
        //         title: 'Otro ejemplo de title',
        //         notes: 'Otro ejemplo de notes'
        //       }
        //     ],
        //     activeEvent: {
        //       id: '1',
        //       start: 2022-03-22T15:00:00.000Z,
        //       end: 2022-03-22T18:00:00.000Z,
        //       title: 'Ejemplo de title',
        //       notes: 'Ejemplo de notes'
        //     }
        //   }
        expect(state.activeEvent).toEqual(events[0]);
        });

        test('onAddNewEvent debe añadir la reserva', () => {
            const newEvent = {
                id: '3',
                start: new Date('2022-03-24 18:00:00'),
                end: new Date('2022-03-24 21:00:00'),
                title: 'Ejemplo 3 de title',
                notes: 'Ejemplo 3 de notes',
            };
            const state = calendarSlice.reducer(calendarWithEventsState, onAddNewEvent(newEvent));
            expect(state.events).toEqual([...events,newEvent]);
        });

        test('onUpdateEvent debe modificar la reserva', () => {
            const updatedEvent = {
                id: '1',
                start: new Date('2022-03-22 16:00:00'),
                end: new Date('2022-03-22 19:00:00'),
                title: 'Title modificado',
                notes: 'Notes modificado',
            };
            const state = calendarSlice.reducer(calendarWithEventsState, onUpdateEvent(updatedEvent));
            expect(state.events).toContain(updatedEvent);
            // console.log(state.events);
            // [
            //     {
            //       id: '1',
            //       start: 2022-03-22T15:00:00.000Z,
            //       end: 2022-03-22T18:00:00.000Z,
            //       title: 'Title modificado',
            //       notes: 'Notes modificado'
            //     },
            //     {
            //       id: '2',
            //       start: 2022-03-23T15:00:00.000Z,
            //       end: 2022-03-23T18:00:00.000Z,
            //       title: 'Otro ejemplo de title',
            //       notes: 'Otro ejemplo de notes'
            //     }
            //   ]
        });

        test('onDeleteEvent debe borrar la reserva activa', () => {
            // console.log(calendarWithActiveEventsState);
            // ...
            // activeEvent: {
            //     id: '1',
            //     start: 2022-03-22T15:00:00.000Z,
            //     end: 2022-03-22T18:00:00.000Z,
            //     title: 'Ejemplo de title',
            //     notes: 'Ejemplo de notes'
            //   }

            const activeEvent = {
                id: '1',
                start: new Date('2022-03-22 16:00:00'),
                end: new Date('2022-03-22 19:00:00'),
                title: 'Title modificado',
                notes: 'Notes modificado',
            }
            const state = calendarSlice.reducer(calendarWithActiveEventsState, onDeleteEvent());
            // console.log(state.activeEvent);
            // null
            expect(state.activeEvent).toBe(null);
            expect(state.events).not.toContain(events[0]);
        });

        test('onLoadEvents debe de establecer las reservas', () => {
            let state = calendarSlice.getInitialState();
            state = calendarSlice.reducer(initialState, onLoadEvents(events));
            // console.log(state);
            expect(state).toEqual(calendarWithEventsState);
            expect(state.isLoadingEvents).toBeFalsy();
            expect(state.events).toEqual(events);
            const newEvent = calendarSlice.reducer(state, onLoadEvents(events));
            expect(state.events.length).toBe(events.length);
        });

        test('onLogoutCalendar', () => {
            const state = calendarSlice.reducer(calendarWithActiveEventsState,onLogoutCalendar());
            expect(state).toEqual(initialState);
            expect(state.isLoadingEvents).toBe(true);
            expect(state.events).toEqual([]);
            expect(state.activeEvent).toBeNull();
        });
})