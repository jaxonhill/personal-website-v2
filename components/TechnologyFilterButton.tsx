import { Technology } from "@/lib/projects";
import { motion } from "framer-motion";

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
		<motion.button
			whileHover={{
				scale: 1.05,
			}}
			whileTap={{ scale: 0.85 }}
			className={`${
				isSelected
					? "text-light-main bg-white hover:bg-gray-100 dark:bg-slate-700 dark:hover:bg-slate-800"
					: "bg-white text-slate-400 hover:text-slate-600 hover:bg-gray-100 dark:bg-slate-800 dark:text-slate-600 dark:hover:bg-slate-700 dark:hover:text-slate-500"
			} shadow rounded-full px-4 py-2 font-medium hover:cursor-pointer`}
			onClick={() => handleTechnologyFilter(technology)}
		>
			{technology}
		</motion.button>
	);
}
