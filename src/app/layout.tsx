import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavLinks } from "./_components/NavLinks";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Title for child segments",
    template: "%s | Next.js 14 tutorial",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="flex flex-col h-full"
      lang="en"
    >
      <body className={`flex flex-col h-full ${inter.className}`}>
        <header className="flex gap-4 justify-between items-center">
          <h1 className="text-2xl">Header</h1>
          <div className="flex gap-6 px-4">
            <NavLinks />
          </div>
        </header>
        <main className="flex flex-1 flex-col items-center justify-center">
          {children}
        </main>
        <footer>
          <h1 className="text-2xl">Footer</h1>
        </footer>
      </body>
    </html>
  );
}
