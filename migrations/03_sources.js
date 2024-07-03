const up = async (knex) =>
    knex.schema
        .createTable('sources', (table) => {
            table.increments('id').primary();
            table.text('name').notNullable();
        })

const down = async (knex) =>
    knex.schema.dropTableIfExists('sources')


export { up, down }