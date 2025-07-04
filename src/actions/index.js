import axios from 'axios';
import { ADD_TODO, FETCH_TODOS } from './types';

export function fetchTodos() {
    return function (dispatch) {
        return axios.get('http://localhost:9091/api/todo').then(({ data }) => {
            dispatch(setTodos(data));
        });
    };
}

export function addTodo(todo) {
    return function (dispatch) {
        return axios
            .post('http://localhost:9091/api/todo', {
                task: todo,
            })
            .then(({ data }) => {
                dispatch(addTodos(data));
            })
            .then(axios.get('http://localhost:9091/api/todo'))
            .then(({ data }) => {
                dispatch(setTodos(data));
            });
    };
}

function setTodos(data) {
    return {
        type: FETCH_TODOS,
        payload: data,
    };
}

function addTodos(data) {
    return {
        type: ADD_TODO,
        payload: data,
    };
}
