const up = async (knex) =>
    knex.schema
        .createTable('customers', (table) => {
            table.increments('id').primary();
            table.text('company').notNullable();
            table.text('address');
            table.text('tax_id');
            table.text('phone');
            table.text('email');
            table.text('url');
            table.text('info');
            table.integer('attachments_id');
            table.json('persons').defaultTo('[]');
            table.json('activities').defaultTo('[]');
            table.integer('total_activities').defaultTo(0);
            table.json('notes').defaultTo('[]');
            table.timestamps();
            table.float('total_sales').defaultTo(0);
            table.float('total_balance').defaultTo(0);
            table.text('status_code').references('code').inTable('company_status');
            table.text('next_activity_code').references('code').inTable('activity_types');
            table.text('next_activity_date');
            table.integer('source_id').references('id').inTable('sources');
            table.integer('business_id').references('id').inTable('business');
        })

const down = async (knex) =>
    knex.schema.dropTableIfExists('customers')

export { up, down }