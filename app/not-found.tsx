import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-light-1 h-screen">
      <h1 className="text-center text-heading3-bold text-primary-500 font-bold">
        404
      </h1>
      <p className="text-center text-lg">Page not found</p>
      <p className="text-center text-sm">
        The page you are looking for does not exist
      </p>
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
