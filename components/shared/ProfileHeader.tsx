import { EditIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  accountId: string;
  authUserId?: string | null;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: "User" | "Community";
};

const ProfileHeader = ({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
}: Props) => {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={imgUrl}
              alt="Profile Image"
              fill
              className="rounded-full object-cover shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-left text-heading3-bold text-light-1">
              {name}
            </h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
          </div>
        </div>

        {authUserId && accountId === authUserId && (
          <Link href="/edit-profile">
            <EditIcon className="text-primary-500" />
          </Link>
        )}

        {/* TODO: Community */}
      </div>
      <p className="mt-6 max-w-lg text-base-regular text-light-1">{bio}</p>
      <div className="mt-12 h-0.5 w-full bg-dark-3"></div>
    </div>
  );
};

export default ProfileHeader;
