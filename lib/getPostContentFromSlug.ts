import fs from "fs";
import matter from "gray-matter";

export default function getPostContentFromSlug(slug: String) {
    // Get markdown from the file
    const fileContents = fs.readFileSync(`./posts/${slug}.md`, "utf-8");
    const { data, content } = matter(fileContents);
    return {
        metadata: data,
        content: content,
    }
}