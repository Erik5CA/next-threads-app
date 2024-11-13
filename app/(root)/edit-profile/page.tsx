import AccountProfile from "@/components/forms/AccountProfile";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";

const Page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  const userData = {
    id: user?.id || "",
    objectId: userInfo?._id || "",
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio,
    image: userInfo?.image || user?.imageUrl,
  };
  return (
    <section className=" bg-dark-2 p-10 rounded-lg">
      <AccountProfile user={userData} btnTitle="Update" />
    </section>
  );
};

export default Page;
