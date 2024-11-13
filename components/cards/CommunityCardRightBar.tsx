import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
}

const CommunityCardRightBar = ({ id, name, username, imgUrl }: Props) => {
  return (
    <article className="w-full">
      <div className="flex justify-between items-center flex-wrap gap-3">
        <div className="flex gap-3">
          <Link href={`/communities/${id}`} className="relative h-12 w-12">
            <Image
              src={imgUrl}
              alt="community_logo"
              fill
              className="rounded-full object-cover"
            />
          </Link>

          <div>
            <Link href={`/communities/${id}`}>
              <h4 className="text-base-semibold text-light-1">{name}</h4>
            </Link>
            <p className="text-small-medium text-gray-1">@{username}</p>
          </div>
        </div>

        <Link href={`/communities/${id}`}>
          <Button className="community-card_btn">View</Button>
        </Link>
      </div>
    </article>
  );
};

export default CommunityCardRightBar;
