import React, { Component } from 'react';
import Todo from './Todo';
import { fetchTodos, addTodo } from '../actions';
import { connect } from 'react-redux';

class TodoList extends Component {
    state = {};

    componentDidMount() {
        this.props.fetchTodos();
    }

    render() {
        const { todos } = this.props.data;

        return (
            <>
                <input placeholder="Enter todo..."></input>
                <ul className="todo-list">
                    {todos && todos.length
                        ? todos.map((todo, index) => {
                              return (
                                  <Todo
                                      key={`todo-${index}`}
                                      todo={todo.task}
                                  />
                              );
                          })
                        : 'No todos, yay!'}
                </ul>
            </>
        );
    }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
    data,
    isLoadingData,
});
export default connect(mapStateToProps, {
    fetchTodos,
})(TodoList);
