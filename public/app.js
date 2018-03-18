const CreateUser = document.querySelector('.CreateUser')
CreateUser.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = CreateUser.querySelector('.username').value
  const password = CreateUser.querySelector('.password').value
  const email = CreateUser.querySelector('.email').value
  post('/createUser', { username, password, email })
})
const Login = document.querySelector('.Login')
Login.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = Login.querySelector('.username').value
  const password = Login.querySelector('.password').value
  post('/login', { username, password })
    .then(({ status }) => {
      if (status === 200) alert('login success')
      else alert('login failed')
    })
})
const addTask = document.querySelector('.addTask')
addTask.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = addTask.querySelector('.username').value
  const dominantusername = addTask.querySelector('.dominantusername').value
  const completed = addTask.querySelector('.completed').value
  const task = addTask.querySelector('.task').value
  const due = addTask.querySelector('.due').value
  post('/addTask', { username, dominantusername, completed, task, due })
    .then(({ status }) => {
      if (status === 200) alert('add success')
      else alert('add failed')
    })
})
function post (path, data) {
  return window.fetch(path, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}
