export const database = [
    {
        name: 'default',
        type: 'postgres',
        host: 'localhost',
        port: 5440,
        username: 'skills',
        password: '~EhxiA5g5Nr2',
        database: 'hardjs',
        synchronize: false,
        logging: false,
        entities: [__dirname + '/../src/Entity/**/*.js'],
        migrations: [__dirname + '/../src/Migrations/**/*.js'],
        cli: {
            migrationsDir: __dirname + '/../src/Migrations',
            entitiesDir: __dirname + '/../src/Entity',
            subscribersDir: __dirname + '/../src/Subscriber',
        },
    },
];
