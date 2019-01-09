let path = require('path');
// let ExtractTextPlugin = require('extract-text-webpack-plugin');

let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'), // путь к файлу
        filename: 'main.js',
        // относительная ссылка на файл main.js, которая будет подставляться
        // из браузера (конкатенируется с filename):
        publicPath: 'dist/',

    },
    devServer: {
        //  для легко и быстро заметить ошибку при загрузке
        // прямо на экране браузера- не нужно лезть в консоль:
        overlay: true,
    },
    module: {
        // описание правил, что и с каким расширением делать:
        rules: [
            // $ символизирует конец строки:
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // чтоб не прогонять через babel-loader:
                exclude: '/node_modules',
            },
            // аналогично и для css:
            // {
            //     test: /\.css$/,
            //     use: ExtractTextPlugin.extract({
            //            fallback: 'style-loader',
            //            use: 'css-loader',
            //     })
            // },
        ]
    },
    // plugins: [
    //     new ExtractTextPlugin('style.css'),
    // ]

};

module.exports = (env, options) => {
    let production = options.mode === 'production';
    conf.devtool = production ? false : 'eval-sourcemap';
    return conf;
};