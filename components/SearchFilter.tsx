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
			className="rounded-full border border-slate-400 py-2 px-4"
		/>
	);
}
