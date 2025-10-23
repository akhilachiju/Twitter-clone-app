export default function TweetCard({ user, body }) {
  return (
    <div className="border p-4 rounded-lg mb-4 shadow-sm bg-white dark:bg-gray-800">
      <h2 className="font-bold">{user}</h2>
      <p>{body}</p>
    </div>
  );
}
