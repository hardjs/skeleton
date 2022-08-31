export const database = [
    {
        name: 'default',
        type: process.env.DB_CONNECTION || 'postgres',
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USERNAME || 'postgres',
        password: process.env.DB_PASSWORD || 'example',
        database: process.env.DB_DATABASE || 'example',
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
