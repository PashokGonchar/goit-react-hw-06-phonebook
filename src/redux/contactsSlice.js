import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  items: [],
};

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        add: (state, action) =>{
            state.items.push(action.payload)
        },
        remove: (state, action) => ({
            ...state,
            items: [...state.items.filter(item => item.id !== action.payload)]
        })
    }
})

export const { add, remove } = itemSlice.actions;
export const itemsReducer = itemSlice.reducer;