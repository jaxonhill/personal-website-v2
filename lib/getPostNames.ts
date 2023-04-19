import fs from "fs";

export default function getPosts(): string[] {
    return fs.readdirSync("./posts");
}