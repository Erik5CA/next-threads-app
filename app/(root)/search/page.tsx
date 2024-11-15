import UserCard from "@/components/cards/UserCard";
import Search from "@/components/shared/Search";
import { fetchUser, fetchUsers } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Page = async (props: {
  searchParams?: Promise<{
    search?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const search = searchParams?.search || "";

  const user = await currentUser();
  // if (!user) return null;

  // const userInfo = await fetchUser(user?.id);
  // if (!userInfo?.onboarded) redirect("/onboarding");

  const result = await fetchUsers({
    userId: user?.id || "",
    searchString: search,
    pageNumber: 1,
    pageSize: 25,
  });
  return (
    <div>
      <h1 className="head-text mb-10">Search</h1>

      <div className="mt-14 flex flex-col gap-9">
        <Search />
        {result.users.length === 0 ? (
          <p className="no-result">
            No users found for{" "}
            <span className="text-primary-500 italic">{search}</span>
          </p>
        ) : (
          <>
            {result.users.map((person) => (
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType="User"
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
