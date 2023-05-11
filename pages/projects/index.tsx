import { projects } from "@/lib/projects";
import { Project } from "@/lib/projects";
import { Technology } from "@/lib/projects";
import { useState } from "react";

export default function ProjectPage() {
	const [displayedProjects, setDisplayedProjects] = useState(projects);
	const technologies = getTechnologies(projects);

	function handleFilter(tech: Technology) {
		// Filter out projects that do not have the technologies desired for filter
		let newProjects: Project[] = displayedProjects.filter(
			(proj: Project) => {
				return proj.technologies.includes(tech);
			}
		);
		setDisplayedProjects(newProjects);
	}

	return (
		<div>
			<div className="flex gap-2">
				{technologies.map((technology: Technology) => {
					return (
						<button
							className="rounded-2xl bg-slate-200 px-2 py-1"
							onClick={() => handleFilter(technology)}
						>
							{technology}
						</button>
					);
				})}
			</div>
			<br />
			<br />
			{displayedProjects.map((proj: Project): JSX.Element => {
				return <h1>{proj.name}</h1>;
			})}
		</div>
	);
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