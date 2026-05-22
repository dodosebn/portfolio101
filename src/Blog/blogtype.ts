export type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  cover_image: string | null;
  tags: string[];
  read_time: number;
  published: boolean;
  created_at: string;
  updated_at: string;
};

export type BlogPostInsert = Omit<BlogPost, "id" | "created_at" | "updated_at">;
export type Comment = {
  id: string;
  post_id: string;
  parent_id: string | null;
  author_name: string;
  body: string;
  created_at: string;
  replies: Comment[];
};

export type CommentsProps = {
  postId: string;
};