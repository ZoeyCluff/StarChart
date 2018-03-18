const express = require('express')
const bodyParser = require('body-parser')
const store = require('./store')
const fetch = require('./fetch')
const app = express()
var router = express.Router()
app.use(express.static('public'))
app.use(bodyParser.json())

// app.post('/getTasks', (req, res) => {
//   fetch
//     .GetTasks({
//       username: req.body.username
//     })
//     .then(() => res.send(dataArr))
// })
router.route('/getTasks')
  .get(function(req, res) {
    fetch
      .GetTasks({
        username: req.body.username
      }).then(function(tasks) {
        res.json({tasks})
      })
  })
app.post('/createUser', (req, res) => {
  store
    .createUser({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      dominantusername: req.body.dominantusername
    })
    .then(() => res.sendStatus(200))
})
app.post('/ChangePassword', (req, res) => {
  store
    .ChangePassword({
      username: req.body.username,
      password: req.body.password,

    })
    .then(() => res.sendStatus(200))
})
app.post('/login', (req, res) => {
  store
    .authenticate({
      username: req.body.username,
      password: req.body.password
    })
    .then(({ success }) => {
      if (success) res.sendStatus(200)
      else res.sendStatus(401)
    })
})
app.post('/addTask', (req, res) => {
  store
    .addTask({
      username: req.body.username,
      dominantusername: req.body.dominantusername,
      completed: req.body.completed,
      task: req.body.task,
      due: req.body.due

  }).then(() => res.sendStatus(200))
})
app.post('/addDominant', (req, res) => {
  store
    .addDominant({
      username: req.body.username,
      dominantusername: req.body.dominantusername


  }).then(() => res.sendStatus(200))
})
app.post('/removeDominant', (req, res) => {
  store
    .removeDominant({
      username: req.body.username,
      dominantusername: req.body.dominantusername


  }).then(() => res.sendStatus(200))
})
app.post('/deleteTask', (req, res) => {
  store
    .deleteTask({
      username: req.body.username,
      task: req.body.task


  }).then(() => res.sendStatus(200))
})
app.post('/updateTask', (req, res) => {
  store
    .updateTask({
      username: req.body.username,
      completed: req.body.completed,
      task: req.body.task,
      due: req.body.due

  }).then(() => res.sendStatus(200))
})
app.listen(7555, () => {
  console.log('Server running on http://localhost:7555')
})
