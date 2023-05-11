import Link from "next/link";

export default function AboutPage() {
	return (
		<div>
			<h1>About Page</h1>
			<Link href={"/"} className="underline text-blue-400">
				Back home
			</Link>
		</div>
	);
}
