import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";
import { Poppins } from "next/font/google";

export default function Document() {
	// Hold state of if we are using dark mode or not, false by default
	// const [isDarkMode, setIsDarkMode] = useState(true);
	return (
		<Html lang="en">
			<Head>
				<link rel="shortcut icon" href="/static/jh_logo.svg" />
			</Head>
			<body className="bg-gray-200 min-h-screen dark:bg-slate-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
