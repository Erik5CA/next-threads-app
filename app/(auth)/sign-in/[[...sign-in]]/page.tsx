import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div>
      <h1>Sign in</h1>
      <SignIn />
    </div>
  );
};

export default Page;
