const widthBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = widthBundleAnalyzer({
	env: {
		APIKEY: 'aba6db68acbac338d9cace4cc75b9ec6'
	}
}); 