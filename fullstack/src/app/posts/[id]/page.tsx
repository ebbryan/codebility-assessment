import { getPostById } from "@/app/actions";
import CalendarIcon from "@/components/Icon/Calendar";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!id) {
    return {
      title: "Post not found!",
      description: "The requested post does not exist.",
    };
  }

  const post = await getPostById(Number(id));

  if (post) {
    return {
      title: `${post.title}`,
      description: `${post.excerpt}`,
      openGraph: {
        title: post.title,
        description: post.excerpt,

        url: `${process.env.NEXT_PUBLIC_URL}/posts/${id}`,
        images: [
          {
            url: `${post.image}`,
            width: 400,
            height: 300,
          },
        ],
      },
    };
  }

  return {
    title: "Post Not Found",
    description: "The requested blog post does not exist.",
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPostById(Number(id));

  return (
    <section className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
            <p className="text-gray-600 mt-1">Discover our latest articles</p>
          </div>

          <Link
            href="/"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <MoveLeft className="w-4 mr-1 -mt-1" />
            Back to Posts
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post?.title}
          </h1>
          <p className="text-xl text-gray-600 mb-4">{post?.excerpt}</p>
          {post?.date && (
            <div className="flex items-center text-sm text-gray-500">
              <CalendarIcon className="w-4 h-4 mr-2" />
              {new Date(post?.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          )}
        </div>

        {/* Post Content */}
        {post?.content && (
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-800 leading-relaxed">{post.content}</p>
          </div>
        )}
      </div>
    </section>
  );
}
