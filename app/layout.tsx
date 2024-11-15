import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
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
      <html lang="en">
        <body
          className={`${inter.className} antialiased custom-scrollbar-main bg-dark-2`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
