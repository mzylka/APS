const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const autoprefixer = require("autoprefixer");

var prodCssConfig = {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader,
        {loader: "css-loader", options: {url: false}},
        {
            loader: "postcss-loader",
            options:{
                postcssOptions:{
                    plugins: () => [autoprefixer()]
                }
            }
        },
        "sass-loader"
    ]
}

var jsConfig = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use:{
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env']
        }
    }
}

var devConfig = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            jsConfig,
            {
                test: /\.scss$/,
                use: ["style-loader", {
                    loader: "css-loader",
                    options: {
                        url: false
                    }
                }, "sass-loader"]
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist/"),
        port: 3000,
        publicPath: "http://localhost:3000/"
    }
}

var prodConfig = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "bundle.js"
    },
    optimization: {
        minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()]
    },
    plugins: [new MiniCssExtractPlugin({filename: "style.css"})],
    module: {
        rules: [jsConfig, prodCssConfig]
    },
}

module.exports = (env, argv) => {
    if(argv.mode === "development"){
        return devConfig;
    }

    if(argv.mode === "production"){
        return prodConfig
    }
}