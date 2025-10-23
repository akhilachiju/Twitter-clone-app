"use client";
import { useState } from "react";
import { FaHeart, FaRegHeart, FaRegComment } from "react-icons/fa";

export default function TweetCard({ user, body }) {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    alert(`Comment added: ${comment}`);
    setComment("");
  };

  return (
    <div className="border p-4 rounded-lg mb-4 shadow-sm bg-white text-gray-900">
      <h2 className="font-bold mb-1">{user}</h2>
      <p className="mb-3">{body}</p>

      <div className="flex items-center gap-6 text-gray-600">
        <button onClick={handleLike} className="flex items-center gap-1">
          {liked ? <FaHeart className="text-pink-500" /> : <FaRegHeart className="hover:text-pink-400" />}
          <span>{likes}</span>
        </button>

        <form onSubmit={handleComment} className="flex items-center gap-1 w-full">
          <FaRegComment />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment..."
            className="w-full border rounded p-1 text-sm"
          />
        </form>
      </div>
    </div>
  );
}
