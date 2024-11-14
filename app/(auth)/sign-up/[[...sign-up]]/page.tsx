import { SignUp } from "@clerk/nextjs";

const Page = () => {
  return (
    <div>
      <SignUp forceRedirectUrl={"/onboarding"} />
    </div>
  );
};

export default Page;
