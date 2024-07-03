export const seed = async (knex) => {
  await knex('business').del()
  // await knex('business').insert([
    // { id: 1, name: 'software house' },
    // { id: 2, name: 'HR recruitment agency' },
    // { id: 3, name: 'interactive agency' },
    // { id: 4, name: 'software provider' },
  // ]);
}