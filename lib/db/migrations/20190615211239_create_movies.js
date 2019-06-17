'use strict';

exports.up = async function (knex, Promise) {
  await knex.schema.dropTableIfExists('Movies');
  await knex.schema.createTable('Movies', function (table) {
    table.uuid('id').primary().notNull();
    table.string('name').notNull().unique();
    table.text('description').notNull();
    table.integer('year').unsigned();
    table.integer('rating').unsigned();
    table.string('genre').notNull();
    table.string('studio');
    table.string('cast');
    table.text('image').notNull();
    table.dateTime('createdAt').notNull();
    table.dateTime('updatedAt').notNull();
  });
};

exports.down = async function (knex, Promise) {
  await knex.schema.dropTableIfExists('Movies');
};