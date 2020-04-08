const widthBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const nextEnv = require('next-env'); 
const dotenvLoad = require('dotenv-load');
const webpack = require('webpack');
const withImages = require('next-images'); 
const withPlugins = require('next-compose-plugins');
dotenvLoad();

const nextConfig = {
	webpack(config ,{ isServer, buildId} ) {
		config.resolve.modules.push(__dirname)

		return config;  
	}
}
module.exports =  withPlugins(
	[
		withImages
	],
	nextConfig
)
