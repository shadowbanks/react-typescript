import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';


interface CustomConfiguration extends Configuration {
    devServer?: {
        static?: {
            directory?: string;
        };
        compress?: boolean;
        port?: number;
    }
}

const config: CustomConfiguration = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                            bypassOnDebug: true,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Dasboard',
            template: path.resolve(__dirname, 'dist', 'index.html'),
        }),
    ],
    devServer: {
        static: {
        directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 9000,
    }
};

export default config