const up = async (knex) =>
    knex.schema
        .createTable('activity_types', (table) => {
            table.text('code').primary().notNullable();
            table.text('name').notNullable();
            table.boolean('is_active').notNullable().defaultTo(true);
        })

const down = async (knex) =>
    knex.schema.dropTableIfExists('activity_types')


export { up, down }