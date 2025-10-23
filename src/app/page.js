"use client";
import { useState, useEffect } from "react";
import { getDummyPosts } from "@/lib/dummyData";
import TweetCard from "@/components/TweetCard";
import TweetForm from "@/components/TweetForm";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      const data = await getDummyPosts();
      setPosts(data);
      setLoading(false);
    }
    loadPosts();
  }, []);

  const handleAddTweet = (newTweet) => {
    const newPost = {
      id: posts.length + 1,
      userId: 100,
      body: newTweet,
    };
    setPosts([newPost, ...posts]);
  };

  if (loading) return <p className="text-center mt-10">Loading tweets...</p>;

  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Twitter Clone</h1>

      <TweetForm onAddTweet={handleAddTweet} />

      <div className="space-y-4 mt-6">
        {posts.map((post) => (
          <TweetCard key={post.id} user={`User ${post.userId}`} body={post.body} />
        ))}
      </div>
    </main>
  );
}
