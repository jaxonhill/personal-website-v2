import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="flex flex-col mt-16 w-full">
			<h1 className="text-3xl text-slate-800 font-semibold mb-6 tracking-[0.20em] dark:text-slate-700">
				ABOUT
			</h1>
			<div className="w-full flex flex-col gap-4">
				<div className="bg-white p-6 rounded-2xl shadow dark:bg-slate-800"></div>
			</div>
		</div>
	);
}
