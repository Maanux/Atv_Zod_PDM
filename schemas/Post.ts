import { z } from "zod";

export const Post = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export const PostArray = z.array(Post);

export type Post = z.infer<typeof Post>;
