exports.up = function(knex, Promise) {
    return knex.schema.table('tasks', function(t) {
        t.text('userid').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('tasks', function(t) {
        t.dropColumn('userid');
    });
};
