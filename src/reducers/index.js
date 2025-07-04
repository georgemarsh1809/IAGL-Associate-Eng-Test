import { FETCH_TODOS, ADD_TODO } from '../actions/types';

const initialState = {
    data: {
        todos: [],
    },
};
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_TODOS:
            return { data: action.payload };
        case ADD_TODO:
            return {
                ...state,
                data: {
                    ...state.data,
                    todos: [...state.data.todos, action.payload],
                },
            };
        default:
            return state;
    }
}
