export default function Controller(model, view) {
    const onTodoChange = (todos) => {
        view.renderTodos(todos);
    };
    onTodoChange(model.getTodos());

    return { model, view};
}
