const up = async (knex) =>
    knex.schema
        .createTable('company_status', (table) => {
            table.text('code').primary().notNullable();
            table.text('name').notNullable();
            table.integer('order').defaultTo(10);
        })

const down = async (knex) =>
    knex.schema.dropTableIfExists('company_status')


export { up, down }