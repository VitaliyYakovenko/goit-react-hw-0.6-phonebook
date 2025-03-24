import { configureStore } from "@reduxjs/toolkit";
import { contcatsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contcatsReducer,
        filter: filterReducer,
   }
});


