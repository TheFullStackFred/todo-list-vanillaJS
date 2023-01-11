const todoInput = document.querySelector('.todo-input')
const addTodoButton = document.querySelector('.add-todo-button')
const todoList = document.querySelector('.todo-list')

addTodoButton.disabled = true

todoInput.addEventListener('input', () => {
  todoInput.value
    ? (addTodoButton.disabled = false)
    : (addTodoButton.disabled = true)
})

addTodoButton.addEventListener('click', () => {
  const todo = document.createElement('li')
  const deleteButton = document.createElement('button')
  deleteButton.className = 'delete-todo-button'

  deleteButton.textContent = 'Delete'
  todo.innerHTML = `<h2>${todoInput.value}</h2>`

  todo.appendChild(deleteButton)
  todoList.appendChild(todo)

  todoInput.value = ''
  addTodoButton.disabled = true

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(todo)
  })
})
