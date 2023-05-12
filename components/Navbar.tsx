import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="w-full flex justify-between py-6 px-4">
			<p className="text-light-main tracking-[.32em] font-semibold">
				Jaxon Hill
			</p>
			<button className="p-1">
				<svg
					width="18"
					height="14"
					viewBox="0 0 18 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1H17"
						stroke="#0F172A"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<path
						d="M1 6.71429H17"
						stroke="#0F172A"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<path
						d="M1 12.4286H17"
						stroke="#0F172A"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>
				{/* <Link href={"/about"}>About Me</Link>
				<Link href={"/projects"}>Projects</Link> */}
			</button>
		</nav>
	);
}
