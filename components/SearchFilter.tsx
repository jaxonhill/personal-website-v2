import { useState } from "react";

export default function SearchFilter() {
	const [searchText, setSearchText] = useState<string>("");

	console.log(searchText);

	return (
		<input
			type="text"
			value={searchText}
			onChange={(e) => setSearchText(e.target.value)}
		/>
	);
}
