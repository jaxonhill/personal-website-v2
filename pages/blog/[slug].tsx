import getPostSlugs from "@/lib/getPostSlugs";
import Link from "next/link";

type Slug = {
	slug: string;
};

type SlugFormat = {
	params: Slug;
};

export default function PostPage({ slug }: { slug: string }) {
	return (
		<div>
			<h1>{slug}</h1>
			<Link href={"/blog"} className="text-blue-400 underline">
				Back to blog
			</Link>
		</div>
	);
}

export async function getStaticProps({ params }: { params: Slug }) {
	// Get the designated slug for the page from params
	const slug = params.slug;
	return {
		props: {
			slug: slug,
		},
	};
}

export async function getStaticPaths() {
	// Get the post slugs
	const postSlugs: string[] = getPostSlugs();

	// Format them respectively for the static paths return
	const slugsFormatted: SlugFormat[] = postSlugs.map((slug) => {
		return { params: { slug: slug } };
	});

	return {
		paths: slugsFormatted,
		fallback: false,
	};
}
