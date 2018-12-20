let path = require('path');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'), // путь к файлу
        filename: 'main.js'
    },
    module: {  // описание правил, что и с каким расширением делать
        rules: [
            {
                test: /\.js$/, // $ символизирует конец строки
                // ...
            },
            {
                test: /\.css$/,
                // ...
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
    ]

};

module.exports = conf;