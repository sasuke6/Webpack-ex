var debug = process.env.NODE_ENV !== "production";


module.exports = {

    devtool: debug ? "sourcemap" : null,

    entry: "./js/entry.js",

    output: {

        filename:"bundle.js"

    },

    module: {
       rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader", // Do not use "use" here
                exclude: /node_modules/,
                options: {
                    presets: ['es2015','stage-0'],
                    plugins: ['transform-runtime']
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                
            }
        ],
    },
    resolve: {

        alias: {

            'vue$': 'vue/dist/vue.js'

        }

    },

    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(preferEntry),
        new webpack.optimize.UglifyJsPlugin({mangle:false, sourcemap: false}),

    ]

};