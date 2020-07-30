import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('home_system', table => {
        table.increments('id').primary();
        table.string('logo').notNullable();
        table.string('title').notNullable();
        table.string('descrition').notNullable();
        table.string('image-background').notNullable();
        table.decimal('icon-action').notNullable();
        table.decimal('action').notNullable();
    })
};
export async function down(knex: Knex) {
    return knex.schema.dropTable('home_system');
};