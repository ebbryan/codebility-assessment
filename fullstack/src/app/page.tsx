import PostItem from "@/components/PostItem";
import { getPosts } from "./actions";

export default async function Home() {
  const data = await getPosts();
  return (
    <section className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
          <p className="text-gray-600 mt-1">Discover our latest articles</p>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post) => (
            <PostItem key={post.id} postData={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
