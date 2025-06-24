document.addEventListener('DOMContentLoaded', function () {
  const addBtn = document.getElementById('add-task');
  const inputField = document.getElementById('new-task');
  const todoList = document.getElementById('todo-list');

  // Event: Add Task
  addBtn.addEventListener('click', () => {
    const taskText = inputField.value.trim();

    // Don't add empty task
    if (taskText === '') return;

    // Create list item container
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // Create task text span
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;

    // Create Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.className = 'complete-btn';
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    // Create Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';

    // Complete Button Logic
    completeBtn.addEventListener('click', () => {
      span.classList.toggle('completed');
    });

    // Delete Button Logic
    deleteBtn.addEventListener('click', () => {
      todoList.removeChild(listItem);
    });

    // Append all to list item
    listItem.appendChild(span);
    listItem.appendChild(completeBtn);
    listItem.appendChild(deleteBtn);

    // Add list item to the todo list
    todoList.appendChild(listItem);

    // Clear input
    inputField.value = '';
  });

  // OPTIONAL: Add 'Enter' key support for accessibility
  inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent form submission
      addBtn.click(); // Trigger add logic
    }
  });
});
