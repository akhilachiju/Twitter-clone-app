import { getDummyPosts } from "@/lib/dummyData";

export async function GET() {
    const posts = await getDummyPosts();
    return new Response(JSON.stringify(posts),{
        status: 200,
        headers: { "Content-Type": "application/json" },
  });
}   