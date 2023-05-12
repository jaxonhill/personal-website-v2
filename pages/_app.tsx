import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useState } from "react";
import Navbar from "@/components/Navbar";

// Create the poppins font and pass it as the main font for everything
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
	// Hold state of if we are using dark mode or not, false by default
	const [isDarkMode, setIsDarkMode] = useState(true);

	return (
		<div className={`${poppins.className}`}>
			<Navbar />
			{/* Set the whole website to dark mode if the dark mode state is true
      by applying "dark" class name on the main DOM element wrapping everything */}
			{/* <main className={`${isDarkMode && "dark"}`}> */}
			<main className="px-4 mb-8">
				<section className={`dark:bg-slate-900`}>
					<Component {...pageProps} />
				</section>
			</main>
		</div>
	);
}
