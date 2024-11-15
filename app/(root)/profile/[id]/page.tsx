import ProfileHeader from "@/components/shared/ProfileHeader";
import RepliesTab from "@/components/shared/RepliesTab";
import ThreadsTab from "@/components/shared/ThreadsTab";
import { TabsList, Tabs, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { profileTabs } from "@/constants";
import { fetchUser } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound, redirect } from "next/navigation";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const user = await currentUser();

  // if (!user) redirect("/sign-in");

  const userInfo = await fetchUser(id);

  if (!userInfo) notFound();

  if (!userInfo.onboarded) redirect("/onboarding");

  return (
    <section>
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user?.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />

      <div className="mt-9">
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            {profileTabs.map((tab) => (
              <TabsTrigger key={tab.label} value={tab.value} className="tab">
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={24}
                  height={24}
                  className="object-contain tab-icon"
                />
                <p className="max-sm:hidden">{tab.label}</p>

                {tab.label === "Threads" && (
                  <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                    {userInfo?.threads?.length}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="threads" className="w-full text-light-1">
            <ThreadsTab
              currentId={user?.id}
              accountId={userInfo.id}
              accountType="User"
            />
          </TabsContent>
          <TabsContent value="replies" className="w-full text-light-1">
            <RepliesTab currentId={user?.id} accountId={userInfo._id} />
          </TabsContent>
          <TabsContent value="tagged" className="w-full text-light-1">
            <p className="text-white">Tagged</p>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
