export const seed = async (knex) => {
  await knex('company_status').del()
  await knex('company_status').insert([
    { code: 'SUSPENDED', name: 'relation suspended', order: 10 },
    { code: 'ENTERED', name: 'entered', order: 20 },
    { code: 'APPLICATION', name: 'application sent', order: 30 },
    { code: 'OFFER', name: 'the offer has been sent', order: 40 },
    { code: 'RELATION', name: 'relation started', order: 50 },
    { code: 'PROGRESS', name: 'in progress', order: 60 },
    { code: 'REJECTED', name: 'offer rejected', order: 70 },
  ]);
}


