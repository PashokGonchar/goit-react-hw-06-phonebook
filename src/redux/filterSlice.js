const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    filters : ''
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setStatusFilter : (state, action) => {
        state.filters.push(action.payload)
        }
    }
})

export const { setStatusFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;