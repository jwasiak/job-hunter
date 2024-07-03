const up = async (knex) => {
    // await knex.schema
    //     .createTable('users', (table) => {
    //         table.increments('id').primary();
    //         table.text('login').notNullable();
    //         table.text('first_name');
    //         table.text('last_name').notNullable();
    //         table.text('full_name');
    //         table.text('email');
    //         table.text('password');
    //         table.enu('role', ["ADMIN", "USER"]).defaultTo('USER');
    //         table.boolean('active').notNullable().defaultTo(false);
    //         table.timestamps();
    //     })





    await knex.raw(`
        CREATE TABLE users (
            id integer NOT NULL PRIMARY KEY AUTOINCREMENT, 
            login TEXT NOT NULL UNIQUE, 
            first_name TEXT, 
            last_name TEXT NOT NULL, 
            full_name TEXT,
            email TEXT, 
            password TEXT, 
            role TEXT check (role in ('ADMIN', 'USER')) default 'USER', 
            active BOOLEAN NOT NULL default '0', 
            created_at TIMESTAMP NOT NULL DEFAULT current_timestamp,
            updated_at TIMESTAMP 
        );
    `);

    // await knex.raw(`
    //     CREATE TRIGGER after_insert_users 
    //     AFTER INSERT ON users
    //          BEGIN
    //             UPDATE users
    //             SET created_at = CURRENT_TIMESTAMP                   
    //             WHERE id = NEW.id;
    //         END;
    // `);

    // await knex.raw(`
    //     CREATE TRIGGER after_update_users 
    //     AFTER UPDATE ON users 
    //         BEGIN
    //             UPDATE users
    //             SET updated_at = CURRENT_TIMESTAMP,
    //             full_name = trim(coalesce(NEW.first_name, '') || ' ' || coalesce(NEW.last_name, '')) 
    //             WHERE id = NEW.id;
    //         END;
    // `);




    // await knex.raw(`
    //     CREATE TRIGGER update_timestamp
    //     BEFORE UPDATE
    //     ON ${tableName}
    //     FOR EACH ROW
    //     EXECUTE PROCEDURE update_timestamp();
    //     `);
}


const down = async (knex) => {

    await knex.raw(`
        DROP TRIGGER IF EXISTS after_insert_users;
    `);

    await knex.raw(`
        DROP TRIGGER IF EXISTS after_update_users;
    `);

    await knex.schema.dropTableIfExists('users')
}

export { up, down }


// full_name TEXT GENERATED ALWAYS AS (trim(coalesce(first_name, '') || ' ' || coalesce(last_name, '')))  VIRTUAL,


