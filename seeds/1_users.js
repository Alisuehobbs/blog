exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({
          first_name: 'Ali',
          last_name: 'Hobbs',
          email:'alisuehobbs@gmail.com',
          user_name:'alisuehobbs',
          image:'http://www.allaboutcheetahs.info/assets/img/cheetahs1.jpg',
          hashed_password:'$2a$08$u5LOfImilTGn1JRPxZIRfeuz/6Wyo8UAiQFyvKo8PJ2Hm6p3ZsXjW ',
          admin_id: 1
        }),
        knex('users').insert({
          first_name: 'Wade',
          last_name: 'Meneley',
          email:'wade@wade.com',
          user_name:'p.wademeneley',
          image:'http://www.toonts.com/wp-content/uploads/2016/08/mountain_tapir.jpg',
          hashed_password:'password1234',
          admin_id: 2
        }),
        knex('users').insert({
          first_name: 'Kaitlin',
          last_name: 'Hobbs',
          email:'kaitlin@kaitlin.com',
          user_name:'katethegreat',
          image:'https://upload.wikimedia.org/wikipedia/commons/4/49/Koala_climbing_tree.jpg',
          hashed_password:'password1234',
          admin_id: 2
        })
      ]);
    });
};
