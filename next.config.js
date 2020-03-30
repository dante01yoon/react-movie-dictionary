const widthBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const nextEnv = require('next-env'); 
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = widthBundleAnalyzer(
	withNextEnv(
		{
		}
	)
); 