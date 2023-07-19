module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'password',
    DB: 'account',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    WEBSERVER_PORT: 1000
};