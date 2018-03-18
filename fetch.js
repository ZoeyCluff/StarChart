const knex = require('knex')(require('./knexfile'))
var dataArr = [];
module.exports = {

  GetTasks ({ username }) {
    console.log(`Retrieving tasks for ${username}`)
    // return knex.select('task', 'due').from('tasks').where('username', `${username}`).then(function(tasks) {
    return knex('tasks').select('task', 'due').where('username', 'Zoey2').then(function(result) {
      result.forEach(function(value) {
        dataArr.push(value)
      })
      console.log(dataArr)
        return dataArr

    })

    return dataArr
  }

}

return dataArr
