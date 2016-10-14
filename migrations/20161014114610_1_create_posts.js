'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('posts', (table) => {
        table.increments();
        table.integer('users_id').notNullable().references('id').inTable('users').onDelete('CASCADE');
        table.string('title').notNullable();
        table.string('content', 2000).notNullable();
        table.timestamps(true, true);
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('posts')
}
