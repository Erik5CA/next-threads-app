import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div>
      <SignIn forceRedirectUrl={"/"} />
    </div>
  );
};

export default Page;
