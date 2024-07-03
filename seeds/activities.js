export const seed = async (knex) => {
  await knex('activity_types').del()
  await knex('activity_types').insert([
    { code: 'CHAT', name: 'rozmowa przez komunikator', is_active: true },
    { code: 'COMPLETION', name: 'realizacja umowy / zlecenia', is_active: true },
    { code: 'CONTRACT', name: 'przygotować / wysłać umowę', is_active: true },
    { code: 'DATA', name: 'uzupełnić dane', is_active: true },
    { code: 'DELIVERY', name: 'przekazać / dostarczyć przedmiot umowy / zamówienia', is_active: true },
    { code: 'EMAIL', name: 'e-mail', is_active: true },
    { code: 'INVOICE', name: 'przygotować / wysłać fakturę', is_active: true },
    { code: 'OFFER', name: 'przygotować / wysłać ofertę', is_active: true },
    { code: 'OTHER', name: 'inne działanie', is_active: true },
    { code: 'PAYMENT', name: 'sprawdzić płatność', is_active: true },
    { code: 'PERSON', name: 'ustalić osobę kontaktową / decyzyjną', is_active: true },
    { code: 'PHONE', name: 'rozmowa telefoniczna', is_active: true },
    { code: 'STATUS', name: 'ustalić status oferty / umowy', is_active: true },
    { code: 'VIDEO', name: 'telekonferencja', is_active: true },
    { code: 'WEB_FORM', name: 'formularz na stronie www', is_active: true },
    // { code: 'ANNOUNCEMENT', name: 'extend the announcement', is_active: true },
    // { code: 'ASSESSMENT', name: 'make assessment test', is_active: true },
    // { code: 'CV', name: 'curriculum vitae', is_active: true },
    // { code: 'DECISION', name: 'making a decision', is_active: true },
    // { code: 'EMAIL', name: 'e-mail', is_active: true },
    // { code: 'EVALUATION', name: 'evaluation task', is_active: true },
    // { code: 'FORM', name: 'web form', is_active: true },
    // { code: 'NO', name: 'phone call', is_active: true },
    // { code: 'PHONE', name: 'relation suspended', is_active: true },
    // { code: 'STATUS', name: 'check status', is_active: true },
    // { code: 'VIDEO', name: 'record video interview', is_active: true },
    // { code: 'WEBMAIL', name: 'web mail', is_active: true },
  ]);
}





