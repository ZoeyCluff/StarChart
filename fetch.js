const knex = require('knex')(require('./knexfile'))


module.exports = {

  GetTasks ({ username, userid }) {

    console.log(`Retrieving tasks for ${username} with user ID ${userid}`)

    return knex('tasks').select('task', 'due').where('userid', `${userid}`).then(function(result) {
      return result
      
    })


  }

}
