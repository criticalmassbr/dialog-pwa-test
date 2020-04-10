const withImages = require('next-images');
const path = require('path');
const webpack = require('webpack');

require('dotenv').config();

module.exports = withImages({
    // useFileSystemPublicRoutes: false,
    esModule: true,

    webpack(config, { dev }) {
        config.node = {
            fs: 'empty'
        };

        config.module.rules.push(
            {
                test: /node_modules\/.*\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        );

        config.module.rules.push(
            {
                test: /\.(eot|ttf|woff|woff2)$/i,
                loader: 'file-loader',
            }
        );

        config.module.rules.push({
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        });

        const env = Object.keys(process.env).reduce((acc, curr) => {
            acc[`process.env.${curr}`] = JSON.stringify(process.env[curr]);

            return acc;
        }, {});

        if (dev) {
            config.module.rules.push({
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    // eslint options (if necessary)
                }
            })
        }

        config.plugins.push(new webpack.DefinePlugin(env));

        return config;
    },
});
