let todoList = {
    todos: [],
};

module.exports = {
    getTodos: () => Promise.resolve(todoList),
    addTodo: (todo) => {
        todoList.todos.push(todo);
        return Promise.resolve(todo);
    },
};
