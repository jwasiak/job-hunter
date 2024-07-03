const up = async (knex) =>
    knex.schema
        .createTable('prospects', (table) => {
            table.increments('id').primary();
            table.text('company').notNullable();
            table.text('address');
            table.text('phone');
            table.text('email');
            table.text('url');
            table.text('info');
            table.boolean('is_customer').defaultTo(false);
            table.integer('customer_id').references('id').inTable('customers');
            table.integer('attachments_id');
            table.json('persons').defaultTo('[]');
            table.json('activities').defaultTo('[]');
            table.json('notes').defaultTo('[]');
            table.integer('total_activities').defaultTo(0);
            table.text('created_at').notNullable();
            table.text('updated_at').notNullable();

            table.text('status_code').references('code').inTable('company_status');
            table.text('next_activity_code').references('code').inTable('activity_types');
            table.text('next_activity_date');
            table.integer('source_id').references('id').inTable('sources');
            table.integer('business_id').references('id').inTable('business');
            
        })

const down = async (knex) =>
    knex.schema.dropTableIfExists('prospects')

export { up, down }