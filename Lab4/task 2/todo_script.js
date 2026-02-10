const todoForm = document.getElementById('todo_form')
const todoInput = document.getElementById('todo_input')
const todoList = document.getElementById('todo_list')

const createTaskElement = (taskText) => {
    const li = document.createElement('li');
    li.className = 'todo_item';

    li.innerHTML = `
    <input type="checkbox" class="complete-checkbox">
    <span>${taskText}</span>
    <button class="delete_btn" aria-label="Delete task">🗑</button>
    `;
    const checkbox = li.querySelector(`.complete-checkbox`);
    checkbox.addEventListener('change', () => {
        li.classList.toggle('completed');
    });
    const deleteBtn = li.querySelector(`.delete_btn`);
    deleteBtn.addEventListener('click', () => {
        li.remove();
    });
    return li;
};
const handleAddTodo = (event) => {
    event.preventDefault();
    const taskValue = todoInput.value.trim();
    if (taskValue !== ''){
        const newTask = createTaskElement(taskValue);
        todoList.appendChild(newTask);
        todoInput.value = '';
    }
};

todoForm.addEventListener('submit', handleAddTodo);