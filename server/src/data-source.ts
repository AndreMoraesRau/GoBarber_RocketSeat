import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gostack_gobarber',
  entities: ['./src/modules/**/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
});

export const AppDataSourceMongoDB = new DataSource({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'gostack_gobarber_mongodb',
  useUnifiedTopology: true,
  entities: ['./src/modules/**/infra/typeorm/schemas/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('📊 Data Source 1 (Postgres) has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source 1 (Postgres) initialization', err);
  });

AppDataSourceMongoDB.initialize()
  .then(() => {
    console.log('📊 Data Source 2 (MongoDB) has been initialized!');
  })
  .catch(err => {
    console.error('Error during Data Source 2 (MongoDB) initialization', err);
  });

// async function initializeDB() {
//   await AppDataSource.initialize()
//     .then(() => {
//       console.log('📊 Data Source 1 (Postgres) has been initialized!');
//     })
//     .catch(err => {
//       console.error(
//         'Error during Data Source 1 (Postgres) initialization',
//         err,
//       );
//     });

//   await AppDataSourceMongoDB.initialize()
//     .then(() => {
//       console.log('📊 Data Source 2 (MongoDB) has been initialized!');
//     })
//     .catch(err => {
//       console.error('Error during Data Source 2 (MongoDB) initialization', err);
//     });
// }

// initializeDB();
