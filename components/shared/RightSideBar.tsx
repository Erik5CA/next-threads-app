import { fetchCommunities } from "@/lib/actions/community.actions";
import CommunityCardRightBar from "../cards/CommunityCardRightBar";
import { fetchUsers } from "@/lib/actions/user.action";
import { currentUser } from "@clerk/nextjs/server";
import UserCard from "../cards/UserCard";

const RightSideBar = async () => {
  const user = await currentUser();
  // if (!user) return null;

  const result = await fetchCommunities({
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
  });
  const resultUsers = await fetchUsers({
    userId: user?.id || "",
    searchString: "",
    pageNumber: 1,
    pageSize: 5,
  });

  return (
    <section className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-base-medium text-light-1">Suggested Communities</h3>
        <div className="mt-4 flex flex-col gap-9">
          {result.communities.length === 0 ? (
            <p className="no-result">No communitites</p>
          ) : (
            <>
              {result.communities.map((community) => (
                <CommunityCardRightBar
                  key={community.id}
                  id={community.id}
                  name={community.name}
                  username={community.username}
                  imgUrl={community.image}
                />
              ))}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-base-medium text-light-1">Suggested Users</h3>
        <div className="mt-4 flex flex-col gap-9">
          {resultUsers.users.length === 0 ? (
            <p className="no-result">No users</p>
          ) : (
            <>
              {resultUsers.users.map((person) => (
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
    </section>
  );
};

export default RightSideBar;
