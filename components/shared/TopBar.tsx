import {
  OrganizationSwitcher,
  SignedIn,
  SignOutButton,
  SignedOut,
} from "@clerk/nextjs";
import { LogInIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TopBar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src={"/assets/logo.svg"} alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <SignedOut>
          <div>
            <Link
              href="/sign-in"
              className="bg-primary-500 px-2 py-1 rounded-md text-[12px] text-light-1 hover:bg-primary-500/80 flex gap-2 items-center"
            >
              Sign In
              <LogInIcon className="w-4 h-4" />
            </Link>
          </div>
        </SignedOut>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "py-2 px-4",
            },
          }}
        />
      </div>
    </nav>
  );
};

export default TopBar;
