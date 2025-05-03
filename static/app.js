document.addEventListener('DOMContentLoaded', function () {
  const addBtn = document.getElementById('add-task');
  const inputField = document.getElementById('new-task');
  const todoList = document.getElementById('todo-list');

  addBtn.addEventListener('click', () => {
    const taskText = inputField.value.trim();
    if (taskText === '') return;

    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    completeBtn.addEventListener('click', () => {
      span.classList.toggle('completed');
    });

    deleteBtn.addEventListener('click', () => {
      listItem.remove();
    });

    listItem.appendChild(span);
    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);
    todoList.appendChild(listItem);

    inputField.value = '';
  });
});
