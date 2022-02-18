'use strict';

const Hapi = require('@hapi/hapi')

const init = async () => {
    const server = Hapi.server({
        port: 4000,
        host: 'localhost'
    })

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            // return 'Hello World!';
            return 'Hello!';
        }
    });

    await server.start();
    console.log(`Server is running on port ${server.settings.port}`);
}

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})


init();