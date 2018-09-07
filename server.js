const server = {
    name: 'hello-server',
    start: function () {
        console.log('Server is started')
    }
}

if (module.parent) {
    console.log('Server is required by other module, will not start automatically')
} else {
    server.start()
}

module.exports = server