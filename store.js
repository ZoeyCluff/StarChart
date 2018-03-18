const crypto = require('crypto')
const knex = require('knex')(require('./knexfile'))
module.exports = {

  addDominant ({ username, dominantusername }) {
    console.log(`Adding Dominant ${dominantusername} to Username ${username}`)
    return knex('user').where('username', `${username}`).update({
      dominantusername
    })
  },
  removeDominant ({ username, dominantusername }) {
    console.log(`Removing Dominant ${dominantusername} from Username ${username}`)
    return knex('user').where('username', `${username}`).andWhere('dominantusername', `${dominantusername}`).update({
      dominantusername: 'unowned'
    })
  },
  addTask ({ username, dominantusername, completed, task, due }) {
    console.log(`Add task ${task}`)
    return knex('tasks').insert({
      username,
      dominantusername,
      completed,
      task,
      due
    })
  },
  deleteTask ({ username, task }) {
    console.log(`Delete task ${task}`)
    return knex('tasks').where('task', `${task}`).andWhere('username', `${username}`).del().limit(1)
  },
  createUser ({ username, password, email, dominantusername }) {
    console.log(`Add user ${username}`)
    const { salt, hash } = saltHashPassword({ password })
    return knex('user').insert({
      salt,
      encrypted_password: hash,
      username,
      email,
      dominantusername
    })
  },
  authenticate ({ username, password }) {
    console.log(`Authenticating user ${username}`)
    return knex('user').where({ username })
      .then(([user]) => {
        if (!user) return { success: false }
        const { hash } = saltHashPassword({
          password,
          salt: user.salt
        })
        return { success: hash === user.encrypted_password }
      })
  }
}
function saltHashPassword ({
  password,
  salt = randomString()
}) {
  const hash = crypto
    .createHmac('sha512', salt)
    .update(password)
  return {
    salt,
    hash: hash.digest('hex')
  }
}
function randomString () {
  return crypto.randomBytes(4).toString('hex')
}
