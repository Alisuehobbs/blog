'use strict'

exports.up = function(knex) {
    return knex.schema.createTable('admin_status', (table) => {
        table.increments();
        table.string('status').notNullable();
    })
}

exports.down = function(knex) {
    return knex.schema.dropTable('admin_status')
}
