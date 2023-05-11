import { Project } from "@/lib/projects";

export type ProjectCardProps = {
	project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="flex flex-col gap-4 bg-slate-400 rounded-2xl p-4">
			<h1>{project.name}</h1>
			<p>{project.description}</p>
			<ul>
				{project.technologies.map((tech) => {
					return <li>{tech}</li>;
				})}
			</ul>
		</div>
	);
}
