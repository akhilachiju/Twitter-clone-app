"use client";
import { useState } from "react";
import { FaFeather } from "react-icons/fa";

export default function TweetForm({ onAddTweet }) {
  const [tweet, setTweet] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tweet.trim()) return;
    onAddTweet(tweet);
    setTweet("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <textarea
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        placeholder="What's happening?"
        className="w-full border rounded-lg p-3 focus:outline-none"
      />
      <button
        type="submit"
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg hover:bg-blue-600"
      >
        <FaFeather />
        Tweet
      </button>
    </form>
  );
}
