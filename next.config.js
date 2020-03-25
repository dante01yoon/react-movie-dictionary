const widthBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
module.exports = widthBundleAnalyzer({
	env: {
		API_KEY: 'aba6db68acbac338d9cace4cc75b9ec6',
		ACCESS_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYmE2ZGI2OGFjYmFjMzM4ZDljYWNlNGNjNzViOWVjNiIsInN1YiI6IjVlNTUxYzAxMzU4MTFkMDAxNTVhZWVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KTobcctrmbeWa9n-Lz3ID7X-lUqjz2eAOlEuLCgfzU0'
	}
}); 