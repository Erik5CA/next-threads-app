import { formatDateString } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  id: string;
  currentUserId: string | undefined;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  community: {
    name: string;
    id: string;
    image: string;
  } | null;
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
};

const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  community,
  createdAt,
  comments,
  isComment,
}: Props) => {
  return (
    <article
      className={`flex w-full flex-col rounded-xl ${
        isComment ? "px-0 xs:px-7" : "bg-dark-3 p-7"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex w-full flex-1 flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="Profile image"
                fill
                className="cursor-pointer rounded-full object-cover"
              />
            </Link>
            <div className="thread-card_bar" />
          </div>

          <div className="flex w-full flex-col">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="cursor-pointer text-base-semibold text-light-1">
                {author.name}
              </h4>
            </Link>

            <p className="mt-2 text-small-regular text-light-2">{content}</p>

            <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
              <div className="flex gap-3.5">
                <Image
                  src="/assets/heart-gray.svg"
                  alt="heart"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    src="/assets/reply.svg"
                    alt="reply"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                  />
                </Link>
                <Image
                  src="/assets/repost.svg"
                  alt="repost"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Image
                  src="/assets/share.svg"
                  alt="share"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
              </div>

              {isComment && comments.length > 0 && (
                <Link href={`/thread/${id}`}>
                  <p className="mt-1 text-subtle-medium text-gray-1">
                    {comments.length} replies
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {!isComment && comments.length > 0 && (
        <div className="flex items-center mt-3">
          {comments.map((comment, index) => (
            <div
              key={index}
              className={`${index !== 0 && "-ml-4"} relative w-7 h-7`}
            >
              <Image
                // key={index}
                src={comment.author.image}
                alt={`user_${index}`}
                // width={28}
                // height={28}
                fill
                className={`rounded-full object-cover`}
              />
            </div>
          ))}
          {comments.length > 3 && (
            <p className="ml-1 text-subtle-medium text-gray-1">
              {comments.length}+ Replies
            </p>
          )}
        </div>
      )}

      {!isComment && (
        <div className="text-subtle-medium text-gray-1 mt-5 flex items-center gap-1">
          <p>{formatDateString(createdAt)}</p>
          {community && community.image && (
            <div className="flex gap-2 items-center">
              <Link href={`/communities/${community.id}`}>
                <p>
                  {" - "}{" "}
                  <span className="hover:text-primary-500 hover:underline">
                    {community.name} Community
                  </span>
                </p>
              </Link>
              <div className="relative h-4 w-4">
                <Image
                  src={community.image}
                  alt={community.name}
                  // width={14}
                  // height={14}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

export default ThreadCard;
