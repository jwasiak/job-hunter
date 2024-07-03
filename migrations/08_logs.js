const up = async (knex) =>
    knex.schema
        .createTable('logs', (table) => {
            table.increments('id').primary();
            table.text('action').notNullable();
            table.text('resource').notNullable();
            table.text('record_id').notNullable();
            table.text('record_title');
            table.text('difference');
            table.text('user');
            table.text('created_at').notNullable();
        })

const down = async (knex) =>
    knex.schema.dropTableIfExists('logs')


export { up, down }