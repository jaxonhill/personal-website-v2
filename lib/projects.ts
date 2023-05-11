export type Project = {
    name: string,
    description: string,
    technologies: Technology[],
    githubLink?: string,
    liveSiteLink?: string,
}

// When listing technologies in projects, go from top to bottom of this enum
export enum Technology {
    JAVASCRIPT = "JavaScript",
    TYPESCRIPT = "TypeScript",
    PYTHON = "Python",
    REACT = "React",
    NEXT = "Next.js",
    TAILWIND = "Tailwind",
    FRAMER_MOTION = "Framer Motion",
}

// Store projects here, this will be displayed on projects page
export const projects: Project[] = [
    {
        name: "Personal Website",
        description: "Rebuilt my personal website in TypeScript and Next.js. The site utilizes Static Site Generation to render all the HTML at build time. The site was designed by myself in Figma and implemented with Tailwind CSS for styling.",
        technologies: [Technology.TYPESCRIPT, Technology.NEXT, Technology.TAILWIND, Technology.FRAMER_MOTION],
        githubLink: "testtestlink.com",
    },
    {
        name: "Test project 1",
        description: "TESTING!!! wow wow test",
        technologies: [Technology.JAVASCRIPT, Technology.REACT],
        liveSiteLink: "google.com",
    },
    {
        name: "Test proj 2",
        description: "Another test for the test projects, testing test test",
        technologies: [Technology.NEXT, Technology.TAILWIND, Technology.FRAMER_MOTION],
        githubLink: "testGitlink.com",
        liveSiteLink: "liveSiteLink.com",
    },
    {
        name: "Final test project",
        description: "This will be a test python proj with no links",
        technologies: [Technology.PYTHON],
    }
]