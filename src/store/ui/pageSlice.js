import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    name: 'page',
    initialState: {
        pageGo: 1
    },
    reducers: {
        changePage: ( state, {payload} ) => {
            state.pageGo = payload;
        },
        initializePage: ( state ) => {
            state.pageGo = 1;
        },
        increasePage: ( state ) => {
            state.pageGo +=1;
        },
        decreasePage: ( state ) => {
            state.pageGo -=1;
        }

    }
});

// Action creators are generated for each case reducer function
export const { changePage, initializePage,increasePage, decreasePage } = pageSlice.actions;
