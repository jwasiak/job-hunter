export const seed = async (knex) => {
  await knex('activity_types').del()
  await knex('activity_types').insert([
    { code: 'ANNOUNCEMENT', name: 'extend the announcement', is_active: true },
    { code: 'ASSESSMENT', name: 'make assessment test', is_active: true },
    { code: 'CV', name: 'curriculum vitae', is_active: true },
    { code: 'DECISION', name: 'making a decision', is_active: true },
    { code: 'EMAIL', name: 'e-mail', is_active: true },
    { code: 'EVALUATION', name: 'evaluation task', is_active: true },
    { code: 'FORM', name: 'web form', is_active: true },
    { code: 'NO', name: 'phone call', is_active: true },
    { code: 'PHONE', name: 'relation suspended', is_active: true },
    { code: 'STATUS', name: 'check status', is_active: true },
    { code: 'VIDEO', name: 'record video interview', is_active: true },
    { code: 'WEBMAIL', name: 'web mail', is_active: true },
  ]);
}
