/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
    .createTable('usuarios', function (table) {
        table.increments('id');
        table.string('username', 50).notNullable();
        table.string('password').notNullable();
        table.timestamp('deletado_em').nullable().defaultTo(null)
    })
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .dropTable("usuarios")
};
