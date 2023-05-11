import Link from "next/link";

export default function Home() {
	return (
		<div className="flex flex-col gap-2 underline text-blue-400">
			<Link href={"/about"}>About Me</Link>
			<Link href={"/projects"}>Projects</Link>
		</div>
	);
}
