import React from "react";
import ThreadCard from "../cards/ThreadCard";
import { getUserReplies } from "@/lib/actions/user.action";

type Props = {
  currentId: string;
  accountId: string;
  accountType?: string;
};

const RepliesTab = async ({ currentId, accountId, accountType }: Props) => {
  const userReplies = await getUserReplies(accountId);
  return (
    <section className="mt-9 flex flex-col gap-10">
      {userReplies.map((thread: any) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentId}
          parentId={thread.parentId}
          content={thread.text}
          author={{
            name: thread.author.name,
            image: thread.author.image,
            id: thread.author.id,
          }}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      ))}
    </section>
  );
};

export default RepliesTab;
