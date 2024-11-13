"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { usePathname, useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";
import { CommentValidation, CommentSchema } from "@/lib/validations/thread";
import Image from "next/image";
import { addCommentToThread } from "@/lib/actions/thread.action";

type Props = {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
};

const Comment = ({ threadId, currentUserId, currentUserImg }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm<CommentSchema>({
    resolver: zodResolver(CommentValidation),
    defaultValues: {
      thread: "",
    },
  });

  const onSubmit = async (data: CommentSchema) => {
    await addCommentToThread(threadId, data.thread, currentUserId, pathname);
    form.reset({ thread: "" });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="comment-form">
        <FormField
          control={form.control}
          name="thread"
          render={({ field }) => (
            <FormItem className="flex gap-3 items-center w-full">
              <div className="relative h-11 w-11">
                <Image
                  src={currentUserImg}
                  alt="Profile image"
                  // width={44}
                  // height={44}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <FormControl className="border-none bg-transparent">
                <Input
                  placeholder="Your comment"
                  className="no-focus text-light-1 outline-none"
                  {...field}
                  autoComplete="off"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="comment-form_btn">
          Reply
        </Button>
      </form>
    </Form>
  );
};

export default Comment;
