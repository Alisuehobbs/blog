'use strict';

module.exports = {
    test: {
        client: 'pg',
        connection: 'postgres://localhost/q2assessment_test'
    },
    development: {
      client: 'pg',
      connection: 'postgres://localhost/q2assessment_dev'
    },
    production: {
	  client: 'pg',
	  connection: process.env.DATABASE_URL
	}
};
