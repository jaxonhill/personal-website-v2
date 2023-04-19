import fs from "fs";

export default function getPostSlugs() {
    const fullPostNames: string[] = fs.readdirSync("./posts");
    return fullPostNames.map((post: string): string => {
        // Remove the .md to just get the slug
        return post.replace(".md", "");
    });
}