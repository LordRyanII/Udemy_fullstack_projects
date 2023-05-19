const path = require('path'); //communonJS

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    devtool: 'source-map'

};

/* module: {},*/