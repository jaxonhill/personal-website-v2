import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "next-themes";

// Create the poppins font and pass it as the main font for everything
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<div className={`${poppins.className}`}>
				<Navbar />
				<main className="px-4 pb-8 md:px-16 lg:px-24 xl:px-40 2xl:px-80">
					<Component {...pageProps} />
				</main>
			</div>
		</ThemeProvider>
	);
}
