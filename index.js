const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
  const taskText = newTaskInput.value.trim();
  if (taskText) {
    const task = document.createElement('li');
    task.classList.add('task');
    task.innerHTML = `
      <span>${taskText}</span>
      <div class="task-buttons">
        <button class="up-button">↑</button>
        <button class="down-button">↓</button>
        <button class="complete-button">✓</button>
        <button class="delete-button">🗑</button>
      </div>
    `;
    taskList.appendChild(task);
    newTaskInput.value = '';
    const deleteButton = task.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
      task.remove();
    });
    const completeButton = task.querySelector('.complete-button');
    completeButton.addEventListener('click', () => {
      task.classList.toggle('completed');
    });
    const upButton = task.querySelector('.up-button');
    upButton.addEventListener('click', () => {
      const prevTask = task.previousElementSibling;
      if (prevTask) {
        taskList.insertBefore(task, prevTask);
      }
    });
    const downButton = task.querySelector('.down-button');
    downButton.addEventListener('click', () => {
      const nextTask = task.nextElementSibling;
      if (nextTask) {
        taskList.insertBefore(nextTask, task);
      }
    });
  }
});
