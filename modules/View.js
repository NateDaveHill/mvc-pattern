export default function View() {

    const createElement = (tag, className) => { 
        const element = document.createElement(tag);
        className && element.classList.add(className);
        return element;
    };

    const getElement = (selector) => {
        const element = document.querySelector(selector);
        return element;
    };

    const configure = () => {
        const root = getElement('#root');
        const title = createElement('h1', 'title');
        title.textContent = 'Todos';
        const form = createElement('form');
        const input = createElement('input');
        input.type = 'text';
        input.placeholder = 'Add a new todo';
        input.name = 'todo';
        const submitButton = createElement('button');
        submitButton.type = 'submit';
        submitButton.textContent = 'Add';
        const todoList = createElement('ul', 'todo-list');
        form.appendChild(input);
        form.appendChild(submitButton);
        root.appendChild(title);
        root.appendChild(form);
        root.appendChild(todoList);
    };
    configure();


    const renderTodos = (todos) => {
        const todoList = document.querySelector('.todo-list');
        todoList.innerHTML = ''; // Clear existing todos

        if (todos.length === 0) {
            const message = createElement('p', "message");
            message.textContent = 'No todos available.';
            todoList.appendChild(message);
            return;
        } else {
            todos.forEach((todo) => {
                const listElement = document.createElement('li');
                listElement.id = todo.id;

                const checkbox = createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.completed;

                const span = document.createElement('span');
                span.contentEditable = true;
                span.classList.add('editable');

                if (todo.completed) {
                const strike = document.createElement('s');
                strike.textContent = todo.text;
                span.appendChild(strike);
                } else {
                    span.textContent = todo.text;
                }

                const deleteButton = createElement('button', "delete");
                deleteButton.textContent = 'Delete';

                listElement.append(checkbox, span, deleteButton);

                todoList.append(listElement);
            });
        }
    }

    const handleValues = () => {
        const input = getElement("input");
        const todoText = input.value;
        const resetInput = () => (input.value = "");
        return [todoText, resetInput];
    }

    const bindAddTodo = (handler) => {
        const form = getElement("form");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const [todoText, resetInput] = handleValues();
            handler(todoText);
            resetInput();
        });
    }

    const bindDeleteTodo = (handler) => {
        const todoList = getElement('.todo-list');
        todoList.addEventListener('click', (event) => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    };

    const bindToggleTodo = (handler) => {
        console.log("Binding toggle todo");
        const todoList = getElement(".todo-list");
        todoList.addEventListener('change', (event) => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }

        })
    }





    return { createElement, getElement, renderTodos, bindAddTodo, handleValues, bindDeleteTodo, bindToggleTodo  };

}