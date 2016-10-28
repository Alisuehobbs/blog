exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admin_status').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('admin_status').insert({
          status: "isAdmin",
        }),
        knex('admin_status').insert({
          status: "isNotAdmin",
        })
      ]);
    });
};
