'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('comments', (table) => {
        table.increments();
        table.integer('users_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.string('title').notNullable();
        table.string('comment', 1000).notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('comment')
}
