export default function Model() {

    let _onTodoChange = (callback) => {};

    const bindTodoChanged = (callback) => {
        _onTodoChange = callback;
    }

    let _todos = JSON.parse(localStorage.getItem("todos")) || []; 

    const _pushTodos = (todos) => {
        _onTodoChange(todos);
        localStorage.setItem("todos", JSON.stringify(_todos));
    }

    _pushTodos(_todos);

    const addTodo = (text) => {

        const todo = {
                id: _todos.length + 1,
                text,
                completed: false
                };
            _todos.push(todo);
            _pushTodos(_todos);
    };

    const removeTodo = (id) => {
        _todos = _todos.filter(todo => todo.id !== id);
    };

    const editTodo = (id, newText) => {
        _todos = _todos.map((todo) => {
            if (todo.id !== id) return todo;   
            return { ...todo, text };
        });
    };

    const toggleTodo = (id) => {
        _todos = _todos.map((todo) => {
            if (todo.id !== id) return todo;
            return { ...todo, completed: !todo.completed };
        });
        console.log("Todos after toggle:", _todos);
    };

    const getTodos = () => {
        return _todos;
    };

    return { addTodo, removeTodo, editTodo, toggleTodo, getTodos, bindTodoChanged };
}