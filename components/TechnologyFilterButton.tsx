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
			className="rounded-2xl bg-slate-200 px-2 py-1"
			onClick={() => handleTechnologyFilter(technology)}
		>
			{technology}
		</button>
	);
}
