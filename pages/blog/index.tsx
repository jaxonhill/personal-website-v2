import getPostSlugs from "@/lib/getPostSlugs";
import Link from "next/link";

export default function BlogPage({ posts }: { posts: string[] }) {
	return (
		<div>
			{posts.map((post: string) => {
				return (
					<p>
						<Link
							href={`/blog/${post}`}
							className="text-blue-400 underline"
						>
							{post}
						</Link>
					</p>
				);
			})}
		</div>
	);
}

export async function getStaticProps() {
	// Get posts and pass them to the BlogPage
	const posts: string[] = getPostSlugs();
	return {
		props: {
			posts: posts,
		},
	};
}
