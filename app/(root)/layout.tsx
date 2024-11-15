import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import TopBar from "@/components/shared/TopBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import RightSideBar from "@/components/shared/RightSideBar";
import BottomBar from "@/components/shared/BottomBar";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Threads",
  description: "A Next 15 Meta Threads Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      dynamic
      appearance={{
        baseTheme: dark,
      }}
    >
      <TopBar />
      <main className="flex flex-row custom-scrollbar-main">
        <LeftSideBar />
        <section className="main-container">
          <div className="w-full max-w-4xl">{children}</div>
        </section>
        <RightSideBar />
      </main>
      <BottomBar />
    </ClerkProvider>
  );
}
