import { GOOD, BAD } from '../types/types';

const initialState = ['']

const FormReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case GOOD:
            return [
                ...state,
                payload
            ]

        case BAD:
            return [
                ...state,
                payload
            ]

        default:
            return state;
    }
}

export default FormReducer;