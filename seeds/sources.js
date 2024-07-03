export const seed = async (knex) => {
  await knex('sources').del()
  // await knex('sources').insert([
    // { id: 1, name: 'lento.pl' },
    // { id: 2, name: 'gratka.pl' },
    // { id: 3, name: 'pracuj.pl' },
    // { id: 4, name: 'useme.com' },
    // { id: 5, name: 'wpzlecenia.pl' },
    // { id: 6, name: 'linkedin.com' },
    // { id: 7, name: 'olx.pl' },
    // { id: 8, name: 'nofluffjobs.com' },
    // { id: 9, name: 'jooble.org' },
    // { id: 10, name: 'justjoin.it' },
    // { id: 11, name: 'dou.eu' },
    // { id: 12, name: 'theprotocol.it' },
    // { id: 13, name: 'goldenline.pl' },
    // { id: 14, name: 'indeed.com' },
  // ]);
}
