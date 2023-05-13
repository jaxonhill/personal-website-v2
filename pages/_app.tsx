import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

// Create the poppins font and pass it as the main font for everything
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className={`${poppins.className}`}>
			<Navbar />
			<main className="px-4 pb-8">
				<Component {...pageProps} />
			</main>
		</div>
	);
}
