import z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().min(1, { message: "Minimum 3 characters" }),
  accountId: z.string(),
});
export type ThreadSchema = z.infer<typeof ThreadValidation>;

export const CommentValidation = z.object({
  thread: z.string().min(1, { message: "Minimum 3 characters" }),
});
export type CommentSchema = z.infer<typeof CommentValidation>;
