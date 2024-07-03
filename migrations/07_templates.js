const up = async (knex) =>
    knex.schema
        .createTable('templates', (table) => {
            table.increments('id').primary();
            table.text('name');
            table.text('text');
            table.text('html');
            table.timestamps();
        })

const down = async (knex) =>
    knex.schema.dropTableIfExists('templates')


export { up, down }