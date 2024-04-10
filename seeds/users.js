export const seed = async (knex) => {
  await knex('users').del()
  await knex('users').insert([
    {
      id: 1, login: 'admin',
      last_name: 'Admin',
      password: '$argon2id$v=19$m=65536,t=3,p=4$dMRPK2OLL6YVInUPBrGeXA$NRFj0vJK7snWNk3XwY7VhTiXrIFC/cFZU9E1pqDaOWg', //admin
      role: 'ADMIN',
      active: true
    },
  ]);
}
