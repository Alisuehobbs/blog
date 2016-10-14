exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({
          users_id: 1,
          post_title: 'Post Number One - Lorem Ipsum',
          content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum fringilla urna, ac ornare neque. Nulla pharetra, massa sed posuere ultricies, urna ex semper nibh, a blandit ligula purus at nibh. Morbi luctus blandit turpis, eget laoreet erat tristique sodales. Sed pharetra mauris eget tortor lacinia auctor. Curabitur pretium lacus ac ligula congue, auctor posuere ante ornare. Nunc aliquet, ipsum id hendrerit bibendum, massa urna egestas libero, vel aliquet turpis elit et tortor. Pellentesque scelerisque ut nibh a cursus. Donec ac nibh in leo tincidunt ornare. Donec at libero risus. Nunc mattis nisl nibh, id hendrerit tellus semper sit amet. Sed feugiat leo ut metus imperdiet interdum. Cras pellentesque ligula quis tortor cursus interdum. In hac habitasse platea dictumst. Aenean maximus vestibulum nisi, et efficitur ligula pulvinar eu. Nam volutpat iaculis turpis, quis pretium eros tincidunt eget.',
        }),
        knex('posts').insert({
          users_id: 2,
          post_title: 'Post Number Two - Bacom Ipsum',
          content:'Bacon ipsum dolor amet leberkas spare ribs fatback short ribs, tenderloin pastrami turducken pork chop chuck beef pork. Chicken alcatra meatloaf t-bone, flank bresaola burgdoggen ground round short loin shankle tail boudin shank meatball pork belly. Tri-tip swine brisket pork ball tip leberkas. Venison cow tongue salami pig short ribs pancetta leberkas. Andouille meatball rump, prosciutto pig kielbasa pastrami.',
        }),
        knex('posts').insert({
          users_id: 3,
          post_title: 'Post Number Three - Gangster Ipsum',
          content:'Lorem ipsizzle dolizzle sit ma nizzle, shit adipiscing mofo. Nullam own yo velizzle, fizzle volutpizzle, suscipizzle fizzle, pizzle vizzle, arcu. Pellentesque eget tortor. Boofron eros. Fusce at bow wow wow dapibizzle shizznit things. Mauris yo fo shizzle izzle turpizzle. Yo in tortor. Pellentesque eleifend rhoncus sure. In hac habitasse platea own yo. Dizzle dapibizzle. Uhuh ... yih! tellizzle pot, pretizzle boofron, mattis funky fresh, eleifend vitae, nunc. Shiznit suscipizzle. Integer sempizzle for sure boofron daahng dawg.',
        })
      ]);
    });
};
