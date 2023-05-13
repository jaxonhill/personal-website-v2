export type SearchFilterProps = {
	searchText: string;
	setSearchText: Function;
};

export default function SearchFilter({
	searchText,
	setSearchText,
}: SearchFilterProps): JSX.Element {
	return (
		<input
			type="text"
			value={searchText}
			onChange={(e) => setSearchText(e.target.value)}
			className="shadow font-medium rounded-full mb-2 py-2 px-4 border-none outline-none text-slate-800 placeholder:text-slate-400 focus:outline-light-main dark:bg-slate-800 dark:placeholder:text-slate-600 dark:text-slate-300"
			placeholder="Search for a project..."
		/>
	);
}
