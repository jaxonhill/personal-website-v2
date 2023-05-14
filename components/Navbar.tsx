import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
	const { theme, setTheme } = useTheme();

	return (
		<nav className="w-full flex justify-between items-center py-6 px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-80">
			<p className="text-light-main font-semibold">jaxonhill.xyz</p>
			<div className="flex gap-4 items-center">
				<Link className="text-slate-500 font-semibold" href={"/"}>
					Home
				</Link>
				<Link
					className="text-slate-500 font-semibold"
					href={"/projects"}
				>
					Projects
				</Link>
				<button
					onClick={() =>
						setTheme(theme === "dark" ? "light" : "dark")
					}
				>
					<svg
						className="fill-slate-500"
						width="18"
						height="18"
						viewBox="0 0 15 18"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M13.4923 14.1691L14.0707 13.3533L13.4923 14.1691ZM13.5827 15.7284L12.914 14.9849L13.5827 15.7284ZM7.58945 3.39787L8.52542 3.74995L7.58945 3.39787ZM7.91959 2.40145L8.91717 2.47094L7.91959 2.40145ZM6.77057 1.3435L6.922 2.33197L6.77057 1.3435ZM8.75044 9.21134C7.90497 7.426 7.88025 5.46502 8.52542 3.74995L6.65349 3.04578C5.82538 5.24715 5.856 7.77223 6.94288 10.0673L8.75044 9.21134ZM12.833 12.8459C11.0973 12.2583 9.59591 10.9967 8.75044 9.21134L6.94288 10.0673C8.02976 12.3624 9.96384 13.9861 12.1916 14.7403L12.833 12.8459ZM12.6502 15.1098C9.1562 16.7644 4.9824 15.2733 3.32776 11.7793L1.5202 12.6353C3.64759 17.1276 9.0139 19.0447 13.5062 16.9174L12.6502 15.1098ZM3.32776 11.7793C1.67313 8.28532 3.16423 4.11152 6.65824 2.45688L5.80224 0.64932C1.30995 2.77671 -0.607188 8.14302 1.5202 12.6353L3.32776 11.7793ZM12.1916 14.7403C12.4851 14.8397 12.6826 14.9067 12.823 14.9591C12.8919 14.9848 12.9322 15.0016 12.9543 15.0117C12.9808 15.0238 12.9573 15.0156 12.914 14.9849L14.0707 13.3533C13.8905 13.2256 13.6714 13.141 13.5226 13.0855C13.3462 13.0196 13.1133 12.9409 12.833 12.8459L12.1916 14.7403ZM13.5062 16.9174C13.7196 16.8163 14.0095 16.6895 14.2515 16.4718L12.914 14.9849C12.9357 14.9653 12.9465 14.9628 12.9093 14.9832C12.8608 15.0096 12.792 15.0426 12.6502 15.1098L13.5062 16.9174ZM12.914 14.9849L14.2515 16.4718C15.2044 15.6147 15.1163 14.0946 14.0707 13.3533L12.914 14.9849ZM8.52542 3.74995C8.62963 3.47292 8.7163 3.24287 8.77711 3.06465C8.82842 2.9143 8.90183 2.69121 8.91717 2.47094L6.922 2.33197C6.92569 2.27898 6.93424 2.25562 6.9268 2.2838C6.92062 2.30725 6.90806 2.34909 6.8843 2.41872C6.83591 2.56049 6.76259 2.75574 6.65349 3.04578L8.52542 3.74995ZM6.65824 2.45688C6.80006 2.38972 6.86916 2.35741 6.92035 2.3367C6.95973 2.32076 6.95094 2.32754 6.922 2.33197L6.61914 0.355034C6.29737 0.404328 6.0156 0.548283 5.80224 0.64932L6.65824 2.45688ZM8.91717 2.47094C9.00623 1.19234 7.88606 0.160947 6.61914 0.355034L6.922 2.33197L8.91717 2.47094Z" />
					</svg>
				</button>
			</div>
		</nav>
	);
}
