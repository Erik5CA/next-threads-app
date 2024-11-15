import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-light-1">
      <h1>Not Found</h1>
      <p>Could not find the profile you are looking for</p>
      <Link
        href="/"
        className="text-center text-sm text-primary-500 hover:underline"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
