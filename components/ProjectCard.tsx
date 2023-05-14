import { Project } from "@/lib/projects";
import Link from "next/link";
import { motion } from "framer-motion";

export type ProjectCardProps = {
	project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="bg-white p-6 flex flex-col rounded-2xl shadow h-full justify-between dark:bg-slate-800"
		>
			<div>
				<h1 className="font-semibold text-slate-800 text-3xl pb-2 dark:text-slate-200">
					{project.name}
				</h1>
				<p className="font-medium text-slate-700 leading-relaxed pb-6 dark:text-slate-400">
					{project.description}
				</p>
				<ul className="flex flex-wrap gap-3">
					{project.technologies.map((tech) => {
						return (
							<li
								key={tech}
								className="font-semibold py-2 px-4 bg-slate-200 text-slate-600 rounded-full dark:bg-slate-900 dark:text-slate-500"
							>
								{tech}
							</li>
						);
					})}
				</ul>
			</div>
			{/* Only render this part if there is a github or site link */}
			{(project.githubLink || project.liveSiteLink) && (
				<div className="pt-8 flex w-full items-center justify-end">
					{project.githubLink && project.liveSiteLink ? (
						<div className="flex gap-4 items-center">
							<motion.div
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{ scale: 0.85 }}
							>
								<Link
									href={project.githubLink}
									className="flex gap-4 items-center"
								>
									<svg
										className="fill-slate-600 dark:fill-slate-300"
										width="16"
										height="16"
										viewBox="0 0 64 64"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M32 0C27.7977 0 23.6365 0.848254 19.7541 2.49633C15.8717 4.14441 12.3441 6.56003 9.37258 9.60528C3.37142 15.7554 0 24.0968 0 32.7945C0 47.2896 9.184 59.5875 21.888 63.9492C23.488 64.2116 24 63.1949 24 62.3095C24 61.5552 24 59.4892 24 56.7672C15.136 58.7349 13.248 52.3728 13.248 52.3728C11.776 48.5686 9.696 47.552 9.696 47.552C6.784 45.5187 9.92 45.5843 9.92 45.5843C13.12 45.8139 14.816 48.9621 14.816 48.9621C17.6 53.9469 22.304 52.4711 24.128 51.6841C24.416 49.5524 25.248 48.1095 26.144 47.2896C19.04 46.4698 11.584 43.6494 11.584 31.1547C11.584 27.5146 12.8 24.5958 14.88 22.2674C14.56 21.4476 13.44 18.037 15.2 13.6097C15.2 13.6097 17.888 12.7243 24 16.9547C26.528 16.2333 29.28 15.8725 32 15.8725C34.72 15.8725 37.472 16.2333 40 16.9547C46.112 12.7243 48.8 13.6097 48.8 13.6097C50.56 18.037 49.44 21.4476 49.12 22.2674C51.2 24.5958 52.416 27.5146 52.416 31.1547C52.416 43.6822 44.928 46.437 37.792 47.2568C38.944 48.2734 40 50.2739 40 53.3238V62.3095C40 63.1949 40.512 64.2444 42.144 63.9492C54.848 59.5547 64 47.2896 64 32.7945C64 28.4878 63.1723 24.2234 61.5641 20.2446C59.956 16.2658 57.5989 12.6505 54.6274 9.60528C51.6559 6.56003 48.1283 4.14441 44.2459 2.49633C40.3635 0.848254 36.2023 0 32 0Z" />
									</svg>
									<p className="text-slate-500 dark:text-slate-500 font-semibold">
										|
									</p>
								</Link>
							</motion.div>
							<motion.div
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{ scale: 0.85 }}
							>
								<Link
									href={project.liveSiteLink}
									className="flex gap-2 items-center"
								>
									<p className="font-medium text-slate-600 dark:text-slate-300">
										Live Site
									</p>
									<svg
										className="fill-slate-600 dark:fill-slate-300"
										width="12"
										height="12"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M32 2.79865C32 2.09175 31.7192 1.4138 31.2193 0.91394C30.7195 0.414085 30.0415 0.133269 29.3346 0.133269L8.01159 0C7.30469 0 6.62674 0.280816 6.12688 0.780672C5.62703 1.28053 5.34621 1.95848 5.34621 2.66538C5.34621 3.37228 5.62703 4.05023 6.12688 4.55009C6.62674 5.04994 7.30469 5.33076 8.01159 5.33076H22.8311L0.788415 27.4268C0.538593 27.6745 0.340304 27.9693 0.204987 28.2941C0.069669 28.6189 0 28.9673 0 29.3192C0 29.671 0.069669 30.0194 0.204987 30.3442C0.340304 30.669 0.538593 30.9638 0.788415 31.2116C1.0362 31.4614 1.33099 31.6597 1.65579 31.795C1.98059 31.9303 2.32897 32 2.68083 32C3.0327 32 3.38108 31.9303 3.70588 31.795C4.03068 31.6597 4.32547 31.4614 4.57325 31.2116L26.6692 9.1156V23.9884C26.6692 24.6953 26.9501 25.3733 27.4499 25.8731C27.9498 26.373 28.6277 26.6538 29.3346 26.6538C30.0415 26.6538 30.7195 26.373 31.2193 25.8731C31.7192 25.3733 32 24.6953 32 23.9884V2.79865Z" />
									</svg>
								</Link>
							</motion.div>
						</div>
					) : (
						(project.githubLink && (
							<motion.div
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{ scale: 0.85 }}
							>
								<Link
									href={project.githubLink}
									className="flex gap-4 items-center"
								>
									<svg
										className="fill-slate-600 dark:fill-slate-300"
										width="16"
										height="16"
										viewBox="0 0 64 64"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M32 0C27.7977 0 23.6365 0.848254 19.7541 2.49633C15.8717 4.14441 12.3441 6.56003 9.37258 9.60528C3.37142 15.7554 0 24.0968 0 32.7945C0 47.2896 9.184 59.5875 21.888 63.9492C23.488 64.2116 24 63.1949 24 62.3095C24 61.5552 24 59.4892 24 56.7672C15.136 58.7349 13.248 52.3728 13.248 52.3728C11.776 48.5686 9.696 47.552 9.696 47.552C6.784 45.5187 9.92 45.5843 9.92 45.5843C13.12 45.8139 14.816 48.9621 14.816 48.9621C17.6 53.9469 22.304 52.4711 24.128 51.6841C24.416 49.5524 25.248 48.1095 26.144 47.2896C19.04 46.4698 11.584 43.6494 11.584 31.1547C11.584 27.5146 12.8 24.5958 14.88 22.2674C14.56 21.4476 13.44 18.037 15.2 13.6097C15.2 13.6097 17.888 12.7243 24 16.9547C26.528 16.2333 29.28 15.8725 32 15.8725C34.72 15.8725 37.472 16.2333 40 16.9547C46.112 12.7243 48.8 13.6097 48.8 13.6097C50.56 18.037 49.44 21.4476 49.12 22.2674C51.2 24.5958 52.416 27.5146 52.416 31.1547C52.416 43.6822 44.928 46.437 37.792 47.2568C38.944 48.2734 40 50.2739 40 53.3238V62.3095C40 63.1949 40.512 64.2444 42.144 63.9492C54.848 59.5547 64 47.2896 64 32.7945C64 28.4878 63.1723 24.2234 61.5641 20.2446C59.956 16.2658 57.5989 12.6505 54.6274 9.60528C51.6559 6.56003 48.1283 4.14441 44.2459 2.49633C40.3635 0.848254 36.2023 0 32 0Z" />
									</svg>
								</Link>
							</motion.div>
						)) ||
						(project.liveSiteLink && (
							<motion.div
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{ scale: 0.85 }}
							>
								<Link
									href={project.liveSiteLink}
									className="flex gap-2 items-center"
								>
									<p className="font-medium text-slate-600 dark:text-slate-300">
										Live Site
									</p>
									<svg
										className="fill-slate-600 dark:fill-slate-300"
										width="12"
										height="12"
										viewBox="0 0 32 32"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path d="M32 2.79865C32 2.09175 31.7192 1.4138 31.2193 0.91394C30.7195 0.414085 30.0415 0.133269 29.3346 0.133269L8.01159 0C7.30469 0 6.62674 0.280816 6.12688 0.780672C5.62703 1.28053 5.34621 1.95848 5.34621 2.66538C5.34621 3.37228 5.62703 4.05023 6.12688 4.55009C6.62674 5.04994 7.30469 5.33076 8.01159 5.33076H22.8311L0.788415 27.4268C0.538593 27.6745 0.340304 27.9693 0.204987 28.2941C0.069669 28.6189 0 28.9673 0 29.3192C0 29.671 0.069669 30.0194 0.204987 30.3442C0.340304 30.669 0.538593 30.9638 0.788415 31.2116C1.0362 31.4614 1.33099 31.6597 1.65579 31.795C1.98059 31.9303 2.32897 32 2.68083 32C3.0327 32 3.38108 31.9303 3.70588 31.795C4.03068 31.6597 4.32547 31.4614 4.57325 31.2116L26.6692 9.1156V23.9884C26.6692 24.6953 26.9501 25.3733 27.4499 25.8731C27.9498 26.373 28.6277 26.6538 29.3346 26.6538C30.0415 26.6538 30.7195 26.373 31.2193 25.8731C31.7192 25.3733 32 24.6953 32 23.9884V2.79865Z" />
									</svg>
								</Link>
							</motion.div>
						))
					)}
				</div>
			)}
		</motion.div>
	);
}
