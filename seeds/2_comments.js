exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({
          users_id: 1,
          title: 'You are awesome! - 1',
          comment:'Everything you touch is gold.',
        }),
        knex('comments').insert({
          users_id: 2,
          title: 'You are okay. - 2',
          comment:'Cool story, bro.',
        }),
        knex('comments').insert({
          users_id: 3,
          title: 'You suck! - 3',
          comment:'You are full of it!',
        })
      ]);
    });
};
