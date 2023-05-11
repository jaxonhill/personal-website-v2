// React/Next imports
import { useState } from "react";
import Link from "next/link";

// Import enums, types, and list of projects from lib file
import { projects } from "@/lib/projects";
import { Project } from "@/lib/projects";
import { Technology } from "@/lib/projects";

// Import components from components file
import TechnologyFilterButton from "@/components/TechnologyFilterButton";
import SearchFilter from "@/components/SearchFilter";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectPage() {
	const [techFiltersSelected, setTechFiltersSelected] = useState<
		Technology[]
	>([]);
	const [searchText, setSearchText] = useState<string>("");

	const technologies = getTechnologies(projects);
	const filteredProjects: Project[] = getFilteredProjects(
		techFiltersSelected,
		searchText,
		projects
	);

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

	return (
		<div>
			<SearchFilter
				searchText={searchText}
				setSearchText={setSearchText}
			/>
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
			<div className="flex flex-col gap-4">
				{filteredProjects.map((proj: Project) => {
					return <ProjectCard project={proj} />;
				})}
			</div>
			<Link href={"/"} className="underline text-blue-400">
				Back home
			</Link>
		</div>
	);
}

function getFilteredProjects(
	technologyFilters: Technology[],
	searchText: string,
	projects: Project[]
): Project[] {
	// Define newProjects as a list of all projects at first
	let newProjects = projects;
	searchText = searchText.toLowerCase(); // Make search text all lower case

	// Loop through filtered technologies list (Check tech filters)
	for (let i = 0; i < technologyFilters.length; i++) {
		// Keep projects that contain that technology (by filter or search text)
		newProjects = newProjects.filter((proj) => {
			console.log(proj.technologies.join(" ").toLowerCase());
			return proj.technologies.includes(technologyFilters[i]);
		});
	}

	// Filter out projects that do not contain the search text
	if (searchText) {
		newProjects = newProjects.filter((proj) => {
			return (
				proj.name.toLowerCase().includes(searchText) ||
				proj.description.toLowerCase().includes(searchText) ||
				proj.technologies.join(" ").toLowerCase().includes(searchText)
			);
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
