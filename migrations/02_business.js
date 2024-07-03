const up = async (knex) =>
    knex.schema
        .createTable('business', (table) => {
            table.increments('id').primary();
            table.text('name').notNullable();
        })

const down = async (knex) =>
    knex.schema.dropTableIfExists('business')


export { up, down }
