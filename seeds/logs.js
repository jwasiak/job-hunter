export const seed = async (knex) => {
  await knex('logs').del()
}
