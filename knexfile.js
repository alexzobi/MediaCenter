const path = require('path');

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: 'test',
      database: 'mediaCenter',
      charset: 'utf8'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src','db', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'src','db', 'seeds'),
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'mediaCenter',
      user:     'root',
      password: 'test'
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'mediaCenter',
      user:     'root',
      password: 'test'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
