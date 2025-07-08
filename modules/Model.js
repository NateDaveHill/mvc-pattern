export default function Model() {

    let _onTodoChnage = (callback) => {};

    const bindTodoChanged = (callback) => {
        _onTodoChnage = callback;
    }

    let _todos = [
        { id: 1, text: "Learn JavaScript", completed: true },
        { id: 2, text: "Build a web app", completed: false },
        { id: 3, text: "Deploy to production", completed: false }
    ];

    const addTodo = (text) => {
    const todo = {
            id: _todos.length + 1,
            text,
            completed: false
            };
        _todos.push(todo);
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