const up = async (knex) =>
    knex.schema
        .createTable('invoices', (table) => {
            table.increments('id').primary();
            table.text('invoice_no').notNullable();
            table.date('invoice_date').notNullable();
            table.date('due_date').notNullable();
            table.json('items').defaultTo('[]');
            table.json('payments').defaultTo('[]');
            table.timestamps();
            table.integer('customer_id').references('id').inTable('customers');
            table.float('invoice_value').defaultTo(0);
            table.float('paid').defaultTo(0);
            table.float('balance').defaultTo(0);
            table.boolean('is_paid').defaultTo(false);
        })

const down = async (knex) =>
    knex.schema.dropTableIfExists('invoices')

export { up, down }