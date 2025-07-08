export default function Controller(model, view) {
    const onTodoChange = (todos) => {
        view.renderTodos(todos);
    };
    onTodoChange(model.getTodos());

    const _handleAddTodo = (todoText) => {
        model.addTodo(todoText);
    };
    const _handleRemoveTodo = (id) => {
        model.removeTodo(id);
    };
    const _handleEditTodo = (id, text) => {
        model.editTodo(id, text);
    };
    const _handleToogleTodo = (id) => {
        model.toggleTodo(id);
        onTodoChange(model.getTodos());
    }

    view.bindAddTodo(_handleAddTodo);
    
    model.bindTodoChanged(onTodoChange);

    view.bindDeleteTodo(_handleRemoveTodo);
    view.bindToggleTodo(_handleToogleTodo);
    

    return { model, view};
}
