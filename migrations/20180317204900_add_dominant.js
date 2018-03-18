exports.up = function(knex, Promise) {
    return knex.schema.table('user', function(t) {
        t.text('dominantusername').notNull();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('user', function(t) {
        t.dropColumn('dominantusername');
    });
};
