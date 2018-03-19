const knex = require('knex')(require('./knexfile'))
var dataArr = [];

module.exports = {

  GetTasks ({ username, userid }) {
    var result = [];
    console.log(`Retrieving tasks for ${username} with user ID ${userid}`)

    return knex('tasks').select('task', 'due').where('userid', `${userid}`).then(function(result) {
      result.forEach(function(value) {
        dataArr.push(value)
        console.log(JSON.stringify(result))
      })
      console.log("outside" + " " + JSON.stringify(result))
        return dataArr

    })

    return dataArr
  }

}
