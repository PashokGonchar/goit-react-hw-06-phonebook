import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    add: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    remove: (state, action) => ({
      ...state,
      items: [...state.contacts.filter(item => item.id !== action.payload)],
    }),
  },
});

export const { add, remove } = contactsSlice.actions;
export const itemsReducer = contactsSlice.reducer;