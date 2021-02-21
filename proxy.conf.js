const proxy = [
    {
        context: '/rest',
       target: 'http://localhost:8080/',
        pathRewrite: { '^/rest': '' },
        logLevel: "debug",
        changeOrigin: false,
		secure: false
    }
];
module.exports = proxy;