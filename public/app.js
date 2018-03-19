const CreateUser = document.querySelector('.CreateUser')
CreateUser.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = CreateUser.querySelector('.username').value
  const password = CreateUser.querySelector('.password').value
  const email = CreateUser.querySelector('.email').value
  const dominantusername = CreateUser.querySelector('.dominantusername').value
  post('/createUser', { username, password, email, dominantusername })
})

const GetTasks = document.querySelector('.getTasks')
GetTasks.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = GetTasks.querySelector('.username').value
  const userid = GetTasks.querySelector('.userid').value
  post('/getTasks', { username, userid })
})

const ChangePassword = document.querySelector('.ChangePassword')
ChangePassword.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = ChangePassword.querySelector('.username').value
  const password = ChangePassword.querySelector('.password').value
  post('/changePassword', {username, password})
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
  const userid = add.Task.querySelector('.userid').value
  const dominantusername = addTask.querySelector('.dominantusername').value
  const completed = addTask.querySelector('.completed').value
  const task = addTask.querySelector('.task').value
  const due = addTask.querySelector('.due').value
  post('/addTask', { username, userid, dominantusername, completed, task, due })
    .then(({ status }) => {
      if (status === 200) alert('add success')
      else alert('add failed')
    })
})
const updateTask = document.querySelector('.updateTask')
updateTask.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = updateTask.querySelector('.username').value
  const completed = updateTask.querySelector('.completed').value
  const task = updateTask.querySelector('.task').value
  const due = updateTask.querySelector('.due').value
  post('/updateTask', { username, completed, task, due })
    .then(({ status }) => {
      if (status === 200) alert('add success')
      else alert('add failed')
    })
})
const deleteTask = document.querySelector('.deleteTask')
deleteTask.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = deleteTask.querySelector('.username').value
  const task = deleteTask.querySelector('.task').value
  post('/deleteTask', { username, task})
    .then(({ status }) => {
      if (status === 200) alert('delete success')
      else alert('delete failed')
    })
})
const addDominant = document.querySelector('.addDominant')
addDominant.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = addDominant.querySelector('.username').value
  const dominantusername = addDominant.querySelector('.dominantusername').value
  post('/addDominant', { username, dominantusername}).then(({ status }) => {
    if (status === 200) alert('Add success')
    else alert('add failed')
  })
})
const removeDominant = document.querySelector('.removeDominant')
removeDominant.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = removeDominant.querySelector('.username').value
  const dominantusername = addDominant.querySelector('.dominantusername').value
  post('/removeDominant', { username, dominantusername}).then(({ status }) => {
    if (status === 200) alert('Removal success')
    else alert('Removal failed')
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
