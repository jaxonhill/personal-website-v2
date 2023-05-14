import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="flex flex-col mt-16 w-full">
			<h1 className="text-3xl text-gray-400 font-semibold mb-6 tracking-[0.20em] dark:text-slate-700">
				HOME
			</h1>
			<div className="w-full grid gap-4 grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2">
				<div className="bg-white p-6 rounded-2xl col-span-2 row-span-2 shadow dark:bg-slate-800 lg:col-span-2 lg:row-span-2">
					<h2 className="font-semibold text-2xl text-slate-800 pb-4 dark:text-slate-200">
						Hey I'm{" "}
						<span className="text-light-main">Jaxon Hill</span>
					</h2>
					<div className="flex flex-col gap-4 text-slate-600 font-medium dark:text-slate-400 lg:text-lg 2xl:text-xl">
						<p>
							I’m a Computer Science student who is interested in
							web development.
						</p>
						<p>
							I’m experienced in various languages and frameworks
							ranging from Python to TypeScript and Next.js.{" "}
						</p>
						<p>
							Right now I enjoy building my projects with
							Typescript, Next.js, Tailwind, and Framer Motion;
							but I’m open to using any technology!
						</p>
					</div>
				</div>
				<motion.div
					whileHover={{
						scale: 1.015,
					}}
					whileTap={{ scale: 0.95 }}
					className="col-span-2 row-span-1 h-full rounded-2xl shadow lg:col-span-2 lg:row-span-1 lg:min-h-[180px]"
				>
					<Link
						href={"/projects"}
						className="group bg-white p-8 h-full rounded-2xl flex gap-6 justify-center items-center hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700"
					>
						<p className="text-5xl font-semibold text-slate-300 group-hover:text-slate-400 dark:text-slate-500 dark:group-hover:text-slate-400">
							PROJECTS
						</p>
						<svg
							className="fill-slate-300 group-hover:fill-slate-400 dark:fill-slate-500 dark:group-hover:fill-slate-400"
							width="32"
							height="32"
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M32 2.79865C32 2.09175 31.7192 1.4138 31.2193 0.91394C30.7195 0.414085 30.0415 0.133269 29.3346 0.133269L8.01159 0C7.30469 0 6.62674 0.280816 6.12688 0.780672C5.62703 1.28053 5.34621 1.95848 5.34621 2.66538C5.34621 3.37228 5.62703 4.05023 6.12688 4.55009C6.62674 5.04994 7.30469 5.33076 8.01159 5.33076H22.8311L0.788415 27.4268C0.538593 27.6745 0.340304 27.9693 0.204987 28.2941C0.069669 28.6189 0 28.9673 0 29.3192C0 29.671 0.069669 30.0194 0.204987 30.3442C0.340304 30.669 0.538593 30.9638 0.788415 31.2116C1.0362 31.4614 1.33099 31.6597 1.65579 31.795C1.98059 31.9303 2.32897 32 2.68083 32C3.0327 32 3.38108 31.9303 3.70588 31.795C4.03068 31.6597 4.32547 31.4614 4.57325 31.2116L26.6692 9.1156V23.9884C26.6692 24.6953 26.9501 25.3733 27.4499 25.8731C27.9498 26.373 28.6277 26.6538 29.3346 26.6538C30.0415 26.6538 30.7195 26.373 31.2193 25.8731C31.7192 25.3733 32 24.6953 32 23.9884V2.79865Z" />
						</svg>
					</Link>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.025,
					}}
					whileTap={{ scale: 0.95 }}
					className="col-span-1 row-span-1 h-full w-full rounded-2xl shadow lg:col-span-1 lg:row-span-1 lg:min-h-[180px]"
				>
					<Link
						href={"https://twitter.com/jaxon10x"}
						className="group bg-white p-8 rounded-2xl h-full w-full flex gap-6 justify-center items-center hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700"
					>
						<svg
							className="fill-slate-300 group-hover:fill-slate-400 dark:fill-slate-500 dark:group-hover:fill-slate-400"
							width="64"
							height="53"
							viewBox="0 0 64 53"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M63.878 6.22739C61.524 7.26428 59.004 7.97765 56.348 8.30118C59.058 6.66747 61.13 4.08327 62.118 1.00474C59.576 2.49176 56.764 3.56884 53.774 4.17772C51.39 1.61362 47.982 0 44.2 0C36.95 0 31.074 5.90185 31.074 13.1762C31.074 14.2231 31.2 15.2279 31.418 16.1804C20.512 15.6679 10.844 10.4031 4.378 2.44956C3.242 4.3867 2.596 6.63732 2.596 9.08688C2.596 13.6705 4.918 17.6895 8.428 20.0526C6.282 19.9903 4.262 19.3935 2.492 18.4109V18.5696C2.492 24.9618 7.012 30.291 13.012 31.5047C11.918 31.7961 10.75 31.9649 9.564 31.9649C8.722 31.9649 7.918 31.8825 7.116 31.7338C8.804 36.9665 13.636 40.7764 19.396 40.891C14.918 44.4176 9.242 46.5195 3.126 46.5195C2.084 46.5195 1.044 46.4693 0 46.3427C5.834 50.0803 12.72 52.2667 20.158 52.2667C44.292 52.2667 57.48 32.1819 57.48 14.7878C57.48 14.2332 57.48 13.6685 57.438 13.1018C60.012 11.2591 62.24 8.92412 64 6.27763L63.878 6.22739Z" />
						</svg>
					</Link>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.025,
					}}
					whileTap={{ scale: 0.95 }}
					className="col-span-1 row-span-1 h-full w-full rounded-2xl shadow lg:col-span-1 lg:row-span-1 lg:min-h-[180px]"
				>
					<Link
						href={"https://github.com/jaxonhill"}
						className="group bg-white p-8 rounded-2xl h-full w-full flex gap-6 justify-center items-center hover:bg-gray-100 dark:bg-slate-800 dark:hover:bg-slate-700"
					>
						<svg
							className="fill-slate-300 group-hover:fill-slate-400 dark:fill-slate-500 dark:group-hover:fill-slate-400"
							width="64"
							height="64"
							viewBox="0 0 64 64"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M32 0C27.7977 0 23.6365 0.848254 19.7541 2.49633C15.8717 4.14441 12.3441 6.56003 9.37258 9.60528C3.37142 15.7554 0 24.0968 0 32.7945C0 47.2896 9.184 59.5875 21.888 63.9492C23.488 64.2116 24 63.1949 24 62.3095C24 61.5552 24 59.4892 24 56.7672C15.136 58.7349 13.248 52.3728 13.248 52.3728C11.776 48.5686 9.696 47.552 9.696 47.552C6.784 45.5187 9.92 45.5843 9.92 45.5843C13.12 45.8139 14.816 48.9621 14.816 48.9621C17.6 53.9469 22.304 52.4711 24.128 51.6841C24.416 49.5524 25.248 48.1095 26.144 47.2896C19.04 46.4698 11.584 43.6494 11.584 31.1547C11.584 27.5146 12.8 24.5958 14.88 22.2674C14.56 21.4476 13.44 18.037 15.2 13.6097C15.2 13.6097 17.888 12.7243 24 16.9547C26.528 16.2333 29.28 15.8725 32 15.8725C34.72 15.8725 37.472 16.2333 40 16.9547C46.112 12.7243 48.8 13.6097 48.8 13.6097C50.56 18.037 49.44 21.4476 49.12 22.2674C51.2 24.5958 52.416 27.5146 52.416 31.1547C52.416 43.6822 44.928 46.437 37.792 47.2568C38.944 48.2734 40 50.2739 40 53.3238V62.3095C40 63.1949 40.512 64.2444 42.144 63.9492C54.848 59.5547 64 47.2896 64 32.7945C64 28.4878 63.1723 24.2234 61.5641 20.2446C59.956 16.2658 57.5989 12.6505 54.6274 9.60528C51.6559 6.56003 48.1283 4.14441 44.2459 2.49633C40.3635 0.848254 36.2023 0 32 0Z" />
						</svg>
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
