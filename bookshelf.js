var knex = require('knex')(require('./knexfile'));
bookshelf = require('bookshelf')(knex);
var _ = require('underscore');

var User = bookshelf.Model.extend({
  tableName: 'user'

})

var Tasks = bookshelf.Model.extend({
  tableName: 'tasks'
})

Tasks.where({username: 'Zoey2'}).fetchAll().then(function(user) {
  console.log(user.serialize())

})
