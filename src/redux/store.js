import { configureStore } from '@reduxjs/toolkit';
import reverseReducer from "./reducer";

export default configureStore({
    reducer: {
        reverse: reverseReducer,
    }
});