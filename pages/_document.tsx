import Document, { Html, Head, Main, NextScript} from 'next/document'; 

import { ServerStyleSheet} from 'styled-components'; 

export default class MyDocument extends Document {
	render(){
		return (
			<Html lang="en">
			<Head>
				<link 
					href='http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext' 
					rel='stylesheet' 
					type='text/css'
				/>
				<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css' rel='stylesheet' type='text/css'/>
				<link href='//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-jp.css' rel='stylesheet' type='text/css'/>
			</Head>
			<body>
				<Main/>
				<NextScript />
			</body>
			</Html>
		)
	}	
}