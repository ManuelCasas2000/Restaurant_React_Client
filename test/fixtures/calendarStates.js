export const events = [
    {
        id: '1',
        start: new Date('2022-03-22 16:00:00'),
        end: new Date('2022-03-22 19:00:00'),
        title: 'Ejemplo de title',
        notes: 'Ejemplo de notes',
    },
    {
        id: '2',
        start: new Date('2022-03-23 16:00:00'),
        end: new Date('2022-03-23 19:00:00'),
        title: 'Otro ejemplo de title',
        notes: 'Otro ejemplo de notes',
    },
]

export const initialState = {
    isLoadingEvents: true,
    events: [],
    activeEvent: null
}

export const calendarWithEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: null
}

export const calendarWithActiveEventsState = {
    isLoadingEvents: false,
    events: [...events],
    activeEvent: {...events[0]}
}