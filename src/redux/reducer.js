import { ADD_TEXT } from "./actions";

const initialState = {
    reverseTexts: [],
};

const reducer = (state = initialState, {payload, type}) => {
    switch (type) {
        case ADD_TEXT:
            return {
                ...state,
                reverseTexts: [payload,...state.reverseTexts],
            };
        default:
            return state;
    }
}

export default reducer;
