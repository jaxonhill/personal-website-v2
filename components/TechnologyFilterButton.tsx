import { Technology } from "@/lib/projects";

export type FilterButtonProps = {
	technology: Technology;
	handleTechnologyFilter: Function;
};

export default function TechnologyFilterButton({
	technology,
	handleTechnologyFilter,
}: FilterButtonProps): JSX.Element {
	return (
		<button
			className="shadow rounded-full bg-white text-slate-400 px-4 py-2 font-medium dark:bg-slate-800 dark:text-slate-600"
			onClick={() => handleTechnologyFilter(technology)}
		>
			{technology}
		</button>
	);
}
