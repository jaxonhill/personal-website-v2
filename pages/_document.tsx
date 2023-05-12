import { Html, Head, Main, NextScript } from "next/document";
import { useState } from "react";
import { Poppins } from "next/font/google";

export default function Document() {
	// Hold state of if we are using dark mode or not, false by default
	const [isDarkMode, setIsDarkMode] = useState(false);
	return (
		<Html lang="en">
			<Head />
			<body className={`${isDarkMode && "dark"}`}>
				<div className={isDarkMode ? "bg-slate-900" : "bg-gray-200"}>
					<Main />
					<NextScript />
				</div>
			</body>
		</Html>
	);
}
