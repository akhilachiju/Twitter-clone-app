import TweetCard from "@/components/TweetCard";
import { getDummyPosts } from "@/lib/dummyData";

export default async function Home() {
  const posts = await getDummyPosts();

  return (
    <main className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Twitter Clone Feed</h1>
      {posts.map((post) => (
        <TweetCard key={post.id} user={`User ${post.userId}`} body={post.body} />
      ))}
    </main>
  );
}
