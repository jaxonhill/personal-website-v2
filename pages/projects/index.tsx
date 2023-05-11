import { projects } from "@/lib/projects";
import { Project } from "@/lib/projects";
import { Technology } from "@/lib/projects";
import { useState } from "react";
import Link from "next/link";

import TechnologyFilterButton from "@/components/TechnologyFilterButton";
import SearchFilter from "@/components/SearchFilter";

export default function ProjectPage() {
	const [techFiltersSelected, setTechFiltersSelected] = useState<
		Technology[]
	>([]);

	const technologies = getTechnologies(projects);

	// TODO: Create separate components for:
	//          - Project card
	//          - Search bar to filter as well

	function handleTechnologyFilter(tech: Technology) {
		// Check if the filter is already in the techFiltersSelected
		if (techFiltersSelected.includes(tech)) {
			let newFilters = techFiltersSelected.filter((currFilter) => {
				return tech != currFilter;
			});
			setTechFiltersSelected(newFilters);
		} else {
			setTechFiltersSelected([...techFiltersSelected, tech]);
		}
	}

	function handleSearchFilter(tech: Technology) {}

	const filteredProjects: Project[] =
		getFilteredProjects(techFiltersSelected);

	return (
		<div>
			<SearchFilter />
			<div className="flex gap-2">
				{technologies.map((technology: Technology) => {
					return (
						<TechnologyFilterButton
							technology={technology}
							handleTechnologyFilter={handleTechnologyFilter}
						/>
					);
				})}
			</div>
			<br />
			<br />
			<div>
				{filteredProjects.map((proj: Project) => {
					return <h1>{proj.name}</h1>;
				})}
			</div>
			<Link href={"/"} className="underline text-blue-400">
				Back home
			</Link>
		</div>
	);
}

function getFilteredProjects(technologyFilters: Technology[]): Project[] {
	let newProjects = projects;
	// Loop through filtered technologies list
	for (let i = 0; i < technologyFilters.length; i++) {
		// Keep projects that contain that technology, otherwise filter them out
		newProjects = newProjects.filter((proj) => {
			return proj.technologies.includes(technologyFilters[i]);
		});
	}
	return newProjects;
}

function getTechnologies(projects: Project[]): Technology[] {
	// Initialize technologies to an empty array as first
	let technologies: Technology[] = [];
	projects.forEach((proj: Project) => {
		proj.technologies.forEach((technology: Technology) => {
			// If a technology from a project is not in the technologies list, append it
			if (!technologies.includes(technology)) {
				technologies.push(technology);
			}
		});
	});
	return technologies; // Return final list of unique technologies
}
