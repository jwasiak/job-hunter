const up = async (knex) =>
    knex.schema
        .createTable('attachments', (table) => {
            table.increments('id').primary();
            table.text('company').notNullable();
            table.json('files').defaultTo('[]');
            table.json('folders').defaultTo('[]');
            table.json('mime_types').defaultTo('[]');
            table.integer('total_attachments').defaultTo(0);
            table.timestamps();
        })


const down = async (knex) =>
    knex.schema.dropTableIfExists('attachments')

export { up, down }