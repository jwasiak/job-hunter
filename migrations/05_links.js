const up = async (knex) => {
    // await knex.schema
    //     .createTable('links', (table) => {
    //         table.increments('id').primary();
    //         table.text('url').notNullable();
    //         table.text('description');
    //         table.enu('category',
    //             ["ADVERTISEMENT", "SOCIAL_MEDIA", "BLOG", "HOME_PAGE",
    //                 "REFERENCES", "COMPANY_PAGE", "NEWS", "FREELANCE", "JOBS"]);
    //         table.timestamps();
    // })

    await knex.raw(`
        CREATE TABLE links(
            id INTEGER PRIMARY KEY,
            url TEXT NOT NULL,
            description TEXT,
            category TEXT check ( category in 
            ('ADVERTISEMENT', 'SOCIAL_MEDIA', 'BLOG', 'HOME_PAGE', 'REFERENCES', 'COMPANY_PAGE', 'NEWS', 'FREELANCE', 'JOBS')
            ) default 'HOME_PAGE',
            created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
            updated_at TIMESTAMP NOT NULL DEFAULT current_timestamp
        );
    `);

}


const down = async (knex) =>
    knex.schema.dropTableIfExists('links')


export { up, down }

