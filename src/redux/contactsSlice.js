import { createSlice } from "@reduxjs/toolkit";


const contcatsSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact(state, action) {
            state.push(action.payload)
        },
        deleteContact(state, action) {
            return state.filter(contcat => contcat.id !== action.payload)
        }
    }
});

export const { addContact ,deleteContact} = contcatsSlice.actions;
export const contcatsReducer = contcatsSlice.reducer;