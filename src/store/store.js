import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { calendarSlice } from './calendar/calendarSlice';
import { uiSlice } from './ui/uiSlice';
import { pageSlice } from './ui/pageSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
        calendar: calendarSlice.reducer,
        currentPage: pageSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false // Con esto no revisa si tiene que serializar las fechas
    })
})
