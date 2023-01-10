const todoInput = document.querySelector('.todo-input')
const addTodoButton = document.querySelector('.add-todo-button')
const todoList = document.querySelector('.todo-list')

addTodoButton.addEventListener('click', () => {
  const todo = document.createElement('li')
  const deleteButton = document.createElement('button')
  deleteButton.className = 'delete-todo-button'

  deleteButton.textContent = 'Delete'
  todo.textContent = todoInput.value

  todo.appendChild(deleteButton)
  todoList.appendChild(todo)

  todoInput.value = ''

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(todo)
  })
})
