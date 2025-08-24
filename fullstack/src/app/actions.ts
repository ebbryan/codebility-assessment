"use server";

import { PostsDataType } from "@/types/posts.type";

export async function getPosts(): Promise<PostsDataType[]> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/posts`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const posts: PostsDataType[] = await response.json();
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostById(id: number): Promise<PostsDataType | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/posts?id=${id}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const post: PostsDataType = await response.json();
    return post;
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return null;
  }
}
