import React, { Component } from 'react';
import Todo from './Todo';
import { fetchTodos, addTodo } from '../actions';
import { connect } from 'react-redux';

class TodoList extends Component {
    state = {
        inputValue: '',
    };

    componentDidMount() {
        this.props.fetchTodos();
    }

    handleInputChange = (e) => {
        this.setState({ inputValue: e.target.value });
    };

    handleAddTodo = () => {
        const { inputValue } = this.state;
        if (inputValue.trim()) {
            this.props.addTodo(inputValue);
            this.setState({ inputValue: '' });
        }
    };

    render() {
        const { todos } = this.props.data;
        const { inputValue } = this.state;

        return (
            <>
                <input
                    placeholder="Enter todo..."
                    value={inputValue}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleAddTodo}>+</button>
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
    addTodo,
})(TodoList);
