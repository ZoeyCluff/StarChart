exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (t) {
    t.increments('taskid').primary()
    t.string('username').notNullable()
    t.string('dominantusername').notNullable()
    t.string('completed').notNullable()
    t.text('task').notNullable()
    t.date('due').notNullable()
    t.timestamps(false, true)
  })
}
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('tasks')
}
