import getPostSlugs from "@/lib/getPostSlugs";
import Link from "next/link";
import getPostContentFromSlug from "@/lib/getPostContentFromSlug";
import markdownToHtml from "@/lib/markdownToHtml";

type Slug = {
	slug: string;
};

type SlugFormat = {
	params: Slug;
};

type PostProps = {
	slug: string;
	metadata: any;
	content: string;
};

export default function PostPage({ slug, metadata, content }: PostProps) {
	return (
		<div className="max-w-2xl mx-auto">
			<h1>{slug}</h1>
			<Link href={"/blog"} className="text-blue-400 underline">
				Back to blog
			</Link>
			<div
				dangerouslySetInnerHTML={{ __html: content }}
				className="prose"
			></div>
		</div>
	);
}

export async function getStaticProps({ params }: { params: Slug }) {
	const slug = params.slug; // Get the designated slug for the page from params
	const { metadata, content } = getPostContentFromSlug(slug); // Get the content and metadata
	const contentHtml = await markdownToHtml(content);

	return {
		props: {
			slug: slug,
			metadata: metadata,
			content: contentHtml,
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
