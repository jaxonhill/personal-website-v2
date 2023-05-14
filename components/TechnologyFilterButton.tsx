import { Technology } from "@/lib/projects";

export type FilterButtonProps = {
	technology: Technology;
	handleTechnologyFilter: Function;
	isSelected: boolean;
};

export default function TechnologyFilterButton({
	technology,
	handleTechnologyFilter,
	isSelected,
}: FilterButtonProps): JSX.Element {
	return (
		<button
			className={`${
				isSelected
					? "text-light-main bg-gray-100 hover:bg-white dark:bg-slate-700 dark:hover:bg-slate-800"
					: "bg-white text-slate-400 hover:text-slate-600 hover:bg-gray-100 dark:bg-slate-800 dark:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-500"
			} shadow rounded-full px-4 py-2 font-medium hover:cursor-pointer`}
			onClick={() => handleTechnologyFilter(technology)}
		>
			{technology}
		</button>
	);
}
